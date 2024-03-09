<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Log;
use Illuminate\Testing\TestResponse;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class ProfileControllerTest extends TestCase
{
    use RefreshDatabase;

    public function test_edit_returns_correct_view_for_authenticated_user(): void
    {
        // Arrange
        $user = User::factory()->create();

        // Act
        $response = $this->actingAs($user)->get(route('profile.edit'));

        // Assert
        $response->assertOk();
        $response->assertInertia(function (AssertableInertia $page) {
            $page->has('status');
            $page->has('has_verified_email');
        });
    }


    public function test_edit_redirects_to_login_for_guest_user(): void
    {
        $response = $this->get(route('profile.edit'));

        $this->assertRedirectsToLogin($response);
    }

    /**
     * @dataProvider invalidNameAndEmailData
     */
    public function test_update_redirects_back_with_errors_for_authenticated_user_with_incorrect_form_data($invalid_data, $invalid_fields)
    {
        // Arrange
        $user = User::factory()->create();

        // Act
        $response = $this->actingAs($user)
            ->from(route('profile.edit'))
            ->patch(route('profile.update', $invalid_data));

        // Assert
        $response->assertRedirect(route('profile.edit'));
        $response->assertSessionHasErrors($invalid_fields);
    }

    public function test_update_redirects_back_with_success_message_for_authenticated_user_with_correct_form_data()
    {
        // Arrange
        $user = User::factory()->create();
        $requestData = ['name' => 'fabio', 'email' => 'fabio@gmail.com'];

        // Act
        $response = $this->actingAs($user)->from(route('profile.edit'))->patch(route('profile.update', $requestData));

        // Assert
        $response->assertRedirect(route('profile.edit'));
        $response->assertSessionHas('status', 'Profile info updated');
    }

    public function test_update_redirects_to_login_for_guest_user(): void
    {
        $response = $this->patch(route('profile.update'));

        $this->assertRedirectsToLogin($response);
    }

    public function test_destroy_redirects_to_login_for_guest_user()
    {
        $response = $this->patch(route('profile.destroy'));

        $this->assertRedirectsToLogin($response);
    }

    /**
     * @dataProvider invalidPasswordData
     */
    public function test_destroy_redirects_back_with_errors_for_authenticated_user_with_incorrect_password(string $invalid_password)
    {
        // Arrange
        $user = User::factory()->create();

        // Act
        $response = $this->actingAs($user)
            ->from(route('profile.edit'))
            ->delete(route('profile.destroy', $invalid_password));

        // Assert
        $response->assertRedirect(route('profile.edit'));
        $response->assertSessionHasErrors(['password']);
    }

    public function test_destroy_redirects_home_for_authenticated_user_with_correct_password()
    {
        // Arrange
        $user_password = 'password';
        $user = User::factory()->create([
            'password' => $user_password,
        ]);

        // Act
        $response = $this->actingAs($user)->from(route('profile.edit'))->delete(route('profile.destroy', ['password' => $user_password]));

        // Assert
        $response->assertRedirect(route('home'));
    }

    private function assertRedirectsToLogin(TestResponse $response): void
    {
        // Assert
        $response->assertStatus(302);
        $response->assertRedirect(route('login.create'));
    }

    public static function invalidPasswordData(): array
    {
        return [
            ['password' => 'short'],
            ['password' => 'thispasswordistoolongandshouldnotbeaccepted'],
            ['password' => 'password with spaces'],
            ['password' => '1234567890'],
            ['password' => 'PasswordWithoutNumbers'],
            ['password' => '!@#$%^&*'],
        ];
    }

    public static function invalidNameAndEmailData(): array
    {
        $validName = 'Valid Name';
        $validEmail = 'valid@example.com';
        $invalidEmail = 'invalid-email';

        return [
            [
                'data' => ['name' => $validName, 'email' => $invalidEmail],
                'fields' => ['email'],
            ],
            [
                'data' => ['name' => null, 'email' => $validEmail],
                'fields' => ['name'],
            ],
            [
                'data' => ['name' => null, 'email' => $invalidEmail],
                'fields' => ['name', 'email'],
            ],
            [
                'data' => ['name' => '', 'email' => ''],
                'fields' => ['name', 'email'],
            ],
            [
                'data' => ['name' => '', 'email' => $validEmail],
                'fields' => ['name'],
            ],
            [
                'data' => ['name' => $validName, 'email' => ''],
                'fields' => ['email'],
            ],
            [
                'data' => ['name' => $validName, 'email' => 'invalid-email'],
                'fields' => ['email'],
            ],
        ];
    }
}
