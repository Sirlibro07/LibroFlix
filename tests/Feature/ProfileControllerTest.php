<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Log;
use Illuminate\Testing\TestResponse;
use Inertia\Testing\AssertableInertia;
use Tests\Helper\RedirectsTest;
use Tests\Helper\ViewTest;
use Tests\TestCase;

class ProfileControllerTest extends TestCase
{
    use RefreshDatabase, ViewTest, RedirectsTest;

    private string $profile_edit_route_name = 'profile.edit';
    private string $profile_update_route_name = 'profile.update';
    private string $profile_destroy_route_name = 'profile.destroy';

    public function test_edit_returns_correct_view_for_authenticated_user(): void
    {
        // Arrange
        $user = User::factory()->create();

        // Act
        $response = $this->actingAs($user)->get(route($this->profile_edit_route_name));

        // Assert
        $this->assertViewResponse($response);
    }


    public function test_edit_redirects_to_login_for_guest_user(): void
    {
        // Act
        $response = $this->get(route($this->profile_edit_route_name));

        // Assert
        $this->assertRedirectsToLogin($response);
    }

    /**
     * @dataProvider invalidNameAndEmailData
     */
    public function test_update_redirects_back_with_errors_for_authenticated_user_with_incorrect_form_data(array $invalid_data, array $invalid_fields)
    {
        // Arrange
        $user = User::factory()->create();

        // Act
        $response = $this->actingAs($user)
            ->from(route($this->profile_edit_route_name))
            ->patch(route($this->profile_update_route_name, $invalid_data));

        // Assert
        $response->assertRedirect(route($this->profile_edit_route_name));
        $response->assertSessionHasErrors($invalid_fields);
    }

    public function test_update_redirects_back_with_success_for_authenticated_user_with_correct_form_data()
    {
        // Arrange
        $user = User::factory()->create();
        $requestData = ['name' => 'fabio', 'email' => 'fabio@gmail.com'];

        // Act
        $response = $this->actingAs($user)->from(route($this->profile_edit_route_name))->patch(route($this->profile_update_route_name, $requestData));

        // Assert
        $response->assertRedirect(route($this->profile_edit_route_name));
        $response->assertSessionHas('status');
    }

    public function test_update_redirects_to_login_for_guest_user(): void
    {
        // Act
        $response = $this->patch(route($this->profile_update_route_name));

        //Assert
        $this->assertRedirectsToLogin($response);
    }

    public function test_destroy_redirects_to_login_for_guest_user()
    {
        // Act
        $response = $this->delete(route($this->profile_destroy_route_name));

        //Assert
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
            ->from(route($this->profile_edit_route_name))
            ->delete(route($this->profile_destroy_route_name, $invalid_password));

        // Assert
        $response->assertRedirect(route($this->profile_edit_route_name));
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
        $response = $this->actingAs($user)->from(route($this->profile_edit_route_name))->delete(route($this->profile_destroy_route_name, ['password' => $user_password]));

        // Assert
        $response->assertRedirect(route('home'));
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
