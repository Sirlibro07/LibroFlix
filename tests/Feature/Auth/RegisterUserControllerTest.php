<?php

namespace Auth;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Testing\TestResponse;
use Tests\Helper\RedirectsTest;
use Tests\Helper\ViewTest;
use Tests\TestCase;

class RegisterUserControllerTest extends TestCase
{
    use RefreshDatabase, RedirectsTest, ViewTest;

    private string $create_route = 'register.create';
    private string $store_route = 'register.store';

    public function test_create_returns_view_for_guest_user(): void
    {
        // Act
        $response = $this->get(route($this->create_route));

        // Assert
        $this->assertViewResponse($response);
    }

    public function test_create_redirects_to_home_for_authenticated_users(): void
    {
        //Arrange
        $user = User::factory()->create();

        // Act
        $response = $this->actingAs($user)->get(route($this->create_route));

        // Assert
        $this->assertRedirectHome($response);
    }

    public function test_store_redirects_to_home_for_authenticated_users(): void
    {
        //Arrange
        $user = User::factory()->create();

        // Act
        $response = $this->actingAs($user)->post(route($this->store_route));

        // Assert
        $this->assertRedirectHome($response);
    }

    /**
     * @dataProvider invalidCreateFormData
     */
    public function test_store_redirects_back_with_errors_for_guest_user_with_invalid_form_data(array $invalid_form_data, array $invalid_fields): void
    {
        // Act
        $response = $this->from($this->create_route)->post(route($this->store_route), $invalid_form_data);

        // Assert
        $response->assertRedirect($this->create_route);
        $response->assertSessionHasErrors($invalid_fields);
    }

    public function test_store_redirects_home_for_guest_user_with_correct_form_data(): void
    {
        // Arrange
        $form_data = ['name'=> 'libro', 'email' => 'libro@gmail.com', 'password' => 'Password123', 'password_confirmation' => 'Password123'];

        // Act
        $response = $this->from($this->create_route)->post(route($this->store_route), $form_data);

        // Assert
        $this->assertRedirectHome($response);
    }

    public static function invalidCreateFormData(): array
    {
        return [
            // All fields invalid
            [
                'data' => ['name' => '', 'email' => '', 'password' => '', 'password_confirmation' => ''],
                'field' => ['name', 'email', 'password'],
            ],

            // Two fields invalid
            [
                'data' => ['name' => '', 'email' => '', 'password' => 'Password123', 'password_confirmation' => 'Password123'],
                'field' => ['name', 'email'],
            ],
            [
                'data' => ['name' => 'John Doe', 'email' => '', 'password' => '', 'password_confirmation' => ''],
                'field' => ['email', 'password'],
            ],
            // Invalid name cases
            [
                'data' => ['name' => '', 'email' => 'john@example.com', 'password' => 'Password123', 'password_confirmation' => 'Password123'],
                'field' => ['name'],
            ],
            // Invalid email cases
            [
                'data' => ['name' => 'John Doe', 'email' => '', 'password' => 'Password123', 'password_confirmation' => 'Password123'],
                'field' => ['email'],
            ],
            [
                'data' => ['name' => 'John Doe', 'email' => 'invalid_email', 'password' => 'Password123', 'password_confirmation' => 'Password123'],
                'field' => ['email'],
            ],
            //Invalid password cases
            [
                'data' => ['name' => 'John Doe', 'email' => 'john@example.com', 'password' => '', 'password_confirmation' => 'Password123'],
                'field' => ['password'],
            ],
            [
                'data' => ['name' => 'John Doe', 'email' => 'john@example.com', 'password' => 'short', 'password_confirmation' => 'short'],
                'field' => ['password'],
            ],
            [
                'data' => ['name' => 'John Doe', 'email' => 'john@example.com', 'password' => 'Password123', 'password_confirmation' => 'Mismatched'],
                'field' => ['password'],
            ],
        ];
    }
}
