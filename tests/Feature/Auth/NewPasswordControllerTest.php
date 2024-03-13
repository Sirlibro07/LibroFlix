<?php

namespace Tests\Feature\Auth;

use App\Models\User;
use App\Services\PasswordResetService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\URL;
use Tests\Helper\RedirectsTest;
use Tests\Helper\ViewTest;
use Tests\TestCase;

class NewPasswordControllerTest extends TestCase
{
    use RefreshDatabase, RedirectsTest, ViewTest;

    private PasswordResetService $password_reset_service;
    private string $store_route_name = 'password_reset.store';
    private string $create_route = 'password_reset.create';

    protected function setUp(): void
    {
        parent::setUp();

        $this->password_reset_service = new PasswordResetService();
    }


    public function test_create_returns_view_for_guest_user_with_correct_email(): void
    {
        // Arrange
        $user = User::factory()->create();
        $this->password_reset_service->generateAndStorePasswordResetToken($user);
        $signed_route = $this->password_reset_service->signedPasswordResetRoute($user);

        // Act
        $response = $this->get($signed_route);

        // Assert
        $this->assertViewResponse($response);
    }

    public function test_create_redirects_home_for_authenticated_users(): void
    {
        // Arrange
        $user = User::factory()->create();
        $this->password_reset_service->generateAndStorePasswordResetToken($user);
        $signed_route = $this->password_reset_service->signedPasswordResetRoute($user);

        // Act
        $response = $this->actingAs($user)->get($signed_route);

        // Assert
        $this->assertRedirectHome($response);
    }

    public function test_create_returns_404_for_guest_user_with_incorrect_email(): void
    {
        // Arrange
        $user = User::factory()->create([
            'email' => 'email@gmail.com'
        ]);
        $this->password_reset_service->generateAndStorePasswordResetToken($user);
        $signed_route = URL::temporarySignedRoute($this->create_route, now()->addHour(), ['user' => 'incorrect_email@gmail.com', 'token' => $user->password_reset_token]);

        // Act
        $response = $this->get($signed_route);

        // Assert
        $response->assertNotFound();
    }

    public function test_create_returns_403_if_url_is_not_a_signed_route(): void
    {
        // Arrange
        $user = User::factory()->create();
        $this->password_reset_service->generateAndStorePasswordResetToken($user);
        $signed_route = $this->password_reset_service->signedPasswordResetRoute($user);
        $url = $signed_route . 'hello';

        // Act
        $response = $this->get($url);

        // Assert
        $response->assertStatus(403);
    }

    /**
     * @dataProvider invalidFormData
     */
    public function test_store_returns_back_with_errors_if_form_data_is_invalid(array $invalid_form_data, array $invalid_fields): void
    {
        // Arrange
        $user = User::factory()->create();
        $this->password_reset_service->generateAndStorePasswordResetToken($user);
        $signed_route = $this->password_reset_service->signedPasswordResetRoute($user);

        // Act
        $response = $this->from($signed_route)->post(route($this->store_route_name), $invalid_form_data);

        // Assert
        $response->assertRedirect($signed_route);
        $response->assertSessionHasErrors($invalid_fields);
    }

    // la mail e' giusta, il token c'e' ma non e' corretto
    public function test_store_returns_back_with_token_error_if_token_does_not_match_user_password_reset_token(): void
    {
        // Arrange
        $user = User::factory()->create();
        $new_password = 'newPassword123';
        $this->password_reset_service->generateAndStorePasswordResetToken($user);
        $signed_route = $this->password_reset_service->signedPasswordResetRoute($user);

        // Act
        $response = $this->from($signed_route)->post(route($this->store_route_name), [
            'email' => $user->email,
            'token' => 'incorrect_token',
            'password' => $new_password,
            'password_confirmation' => $new_password
        ]);

        // Assert
        $response->assertRedirect($signed_route);
        $response->assertSessionHasErrors(['token']);
    }

    public function test_store_redirects_back_with_success_if_email_and_token_are_correct_and_password_is_valid(): void
    {
        // Arrange
        $user = User::factory()->create([
            'password' => 'password123',
        ]);
        $this->password_reset_service->generateAndStorePasswordResetToken($user);
        $signed_route = $this->password_reset_service->signedPasswordResetRoute($user);
        $new_password = 'newPassword123';

        // Act
        $response = $this->from($signed_route)->post(route($this->store_route_name), [
            'email'=>$user->email,
            'token' => $user->password_reset_token,
            'password'=>$new_password,
            'password_confirmation'=>$new_password
        ]);

        // Assert
        $response->assertRedirect(route('login.create'));
        $response->assertSessionHas('status');
    }

    public static function invalidFormData(): array
    {
        return [
            // All fields missing
            [
                'data' => [],
                'fields' => ['token', 'email', 'password']
            ],

            // Individual field missing
            [
                'data' => ['token' => 'token_value', 'email' => 'test@example.com'],
                'fields' => ['password']
            ],
            [
                'data' => ['email' => 'test@example.com', 'password' => 'Password123'],
                'fields' => ['token']
            ],
            [
                'data' => ['token' => 'token_value', 'password' => 'Password123'],
                'fields' => ['email']
            ],

            // Invalid email format
            [
                'data' => ['token' => 'token_value', 'email' => 'invalid_email', 'password' => 'Password123'],
                'fields' => ['email']
            ],

            // Non-existing email
            [
                'data' => ['token' => 'token_value', 'email' => 'nonexisting@example.com', 'password' => 'Password123'],
                'fields' => ['email']
            ],

            // Password confirmation mismatch
            [
                'data' => ['token' => 'token_value', 'email' => 'test@example.com', 'password' => 'Password123', 'password_confirmation' => 'Mismatched'],
                'fields' => ['password']
            ],
        ];
    }
}
