<?php

namespace Tests\Feature\Auth;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\Helper\RedirectsTest;
use Tests\TestCase;

class PasswordControllerTest extends TestCase
{
    use RefreshDatabase, RedirectsTest;
    private string $update_route_name = 'password.update';
    private string $profile_edit_route_name = 'profile.edit';

    public function test_update_redirects_to_login_for_guest_user(): void
    {
        // Act
        $response = $this->put(route($this->update_route_name));

        // Assert
        $this->assertRedirectsToLogin($response);
    }

    /**
     * @dataProvider invalidProfileEditFormData
     */
    public function test_update_redirects_back_with_errors_if_form_data_is_invalid_for_authenticated_user($invalid_form_data, $invalid_fields): void
    {
        // Arrange
        $user = User::factory()->create();

        // Act
        $response = $this->actingAs($user)->from(route($this->profile_edit_route_name))->put(route($this->update_route_name, $invalid_form_data));

        // Assert
        $response->assertRedirect(route($this->profile_edit_route_name));
        $response->assertSessionHasErrors($invalid_fields);
    }

    public function test_update_redirects_back_with_success_when_form_data_is_correct_for_authenticated_users(): void
    {
        // Arrange
        $current_password = 'password';
        $user = User::factory()->create([
            'password' => $current_password
        ]);
        $new_password = 'new_password';
        $form_data = ['current_password' => $current_password, 'password' => $new_password, 'password_confirmation' => $new_password];

        // Act
        $response = $this->actingAs($user)->from(route($this->profile_edit_route_name))->put(route($this->update_route_name, $form_data));

        // Assert
        $response->assertRedirect(route($this->profile_edit_route_name));
        $response->assertSessionHas('status');
    }

    public static function invalidProfileEditFormData(): array
    {
        return [
            [
                'data' => ['current_password' => '', 'password' => ''],
                'fields' => ['current_password', 'password']
            ],
            [
                'data' => ['current_password' => 'wrong_password', 'password' => 'new_password'],
                'fields' => ['current_password']
            ],
            [
                'data' => ['current_password' => 'current_password', 'password' => 'short'],
                'fields' => ['password']
            ],
            [
                'data' => ['current_password' => 'old_password', 'password' => 'old_password'],
                'fields' => ['password']
            ],
            [
                'data' => ['current_password' => 'current_password', 'password' => 'newpassword'],
                'fields' => ['password']
            ],
            [
                'data' => ['current_password' => 'current_password', 'password' => 'newpassword', 'password_confirmation' => 'wrong_confirmation'],
                'fields' => ['password']
            ],
            [
                'data' => ['current_password' => 'current_password', 'password' => 'current_password'],
                'fields' => ['password']
            ],
        ];
    }

}
