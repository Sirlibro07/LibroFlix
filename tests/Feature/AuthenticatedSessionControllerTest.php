<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Tests\Helper\RedirectsTest;
use Tests\Helper\ViewTest;
use Tests\TestCase;

class AuthenticatedSessionControllerTest extends TestCase
{
    use RefreshDatabase, ViewTest, RedirectsTest;
    private string $create_route_name = 'login.create';
    private string $store_route_name = 'login.store';
    private string $destroy_route_name = 'logout.store';

    public function test_create_returns_view_for_guest_user(): void
    {
        // Act
        $response = $this->get(route($this->create_route_name));

        // Assert
        $this->assertViewResponse($response);
    }

    public function test_create_redirects_home_for_authenticated_user(): void
    {
        // Arrange
        $user = User::factory()->create();

        // Act
        $response = $this->actingAs($user)->get(route($this->create_route_name));

        // Assert
        $this->assertRedirectHome($response);
    }

    public function test_store_redirects_home_for_authenticated_user()
    {
        // Arrange
        $user = User::factory()->create();

        // Act
        $response = $this->actingAs($user)->post(route($this->store_route_name));

        // Assert
        $this->assertRedirectHome($response);
    }

    /**
     * @dataProvider invalidCreateFormData
     */
    public function test_store_redirects_back_with_errors_for_guest_user_with_invalid_form_data(array $invalid_form_data, array $invalid_fields): void
    {
        // Act
        $response = $this->from(route($this->create_route_name))->post(route($this->store_route_name), $invalid_form_data);

        // Assert
        $response->assertStatus(302);
        $response->assertRedirect(route($this->create_route_name));
        $response->assertSessionHasErrors($invalid_fields);
    }

    public function test_store_redirects_home_guest_user_with_correct_credentials(): void
    {
        // Arrange
        $password = 'password123';
        $user = User::factory()->create([
            'password' => $password,
        ]);
        $credentials = ['email'=> $user->email, 'password'=> $password];
        $form_data = [...$credentials, 'remember'=> false];

        // Act
        $response = $this->from(route($this->create_route_name))->post(route($this->store_route_name), $form_data);

        // Assert
        $this->assertRedirectHome($response);
    }

    /**
     * @dataProvider invalidCredentials
     */
    public function test_store_redirects_back_for_guest_user_with_incorrect_credentials(array $incorrect_credentials): void
    {
        // Arrange
        $password = 'password123';
        $user = User::factory()->create([
            'email' => 'email@gmail.com',
            'password' => $password,
        ]);
        $form_data = [...$incorrect_credentials, 'remember'=> false];

        // Act
        $response = $this->from(route($this->create_route_name))->post(route($this->store_route_name), $form_data);

        // Assert
        $response->assertStatus(302);
        $response->assertRedirect(route($this->create_route_name));
        $response->assertSessionHasErrors('email');
    }

    public function test_destroy_redirects_home_for_authenticated_user(): void
    {
        // Arrange
        $user = User::factory()->create();

        // Act
        $response = $this->actingAs($user)->delete(route($this->destroy_route_name));

        // Assert
        $this->assertRedirectHome($response);
    }

    public function test_destroy_redirects_login_for_guest_user(): void
    {
        // Act
        $response = $this->delete(route($this->destroy_route_name));

        // Assert
        $this->assertRedirectsToLogin($response);
    }

    public static function invalidCredentials(): array
    {
        return [
            // both wrong
            [
                'data' => ['email' => 'libro@gmail.com', 'password' => 'random_words'],
            ],
            // email wrong
            [
                'data' => ['email' => 'libro@gmail.com', 'password' => 'password123'],
            ],
            // password wrong
            [
                'data' => ['email' => 'email@gmail.com', 'password' => 'incorrectPassword'],
            ],
        ];
    }

    public static function invalidCreateFormData(): array
    {
        return [
            [
                'data' => ['email' => '', 'password' => ''],
                'field' => ['email', 'password'],
            ],
            [
                'data' => ['email' => '', 'password' => 'Password123'],
                'field' => ['email'],
            ],
            [
                'data' => ['email' => 'john@example.com', 'password' => ''],
                'field' => ['password'],
            ],
            [
                'data' => ['email' => '', 'password' => 'Password123'],
                'field' => ['email'],
            ],
            [
                'data' => ['email' => 'invalid_email', 'password' => 'Password123'],
                'field' => ['email'],
            ],
            [
                'data' => ['email' => 'john@example.com', 'password' => ''],
                'field' => ['password'],
            ],
            [
                'data' => ['email' => 'john@example.com', 'password' => 'short'],
                'field' => ['password'],
            ],
            [
                'data' => ['email' => '', 'password' => ''],
                'field' => ['email', 'password'],
            ],
            [
                'data' => ['email' => 'invalid_email', 'password' => ''],
                'field' => ['email', 'password'],
            ],
        ];
    }
}
