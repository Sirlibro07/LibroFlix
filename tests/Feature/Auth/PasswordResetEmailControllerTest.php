<?php

namespace Tests\Feature\Auth;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Log;
use Illuminate\Testing\TestResponse;
use Tests\Helper\RedirectsTest;
use Tests\Helper\ViewTest;
use Tests\TestCase;

class PasswordResetEmailControllerTest extends TestCase
{
    use RefreshDatabase, RedirectsTest, ViewTest;
    private string $create_route_name = 'password_reset_email.create';
    private string $store_route_name = 'password_reset_email.store';

    public function test_create_redirects_home_authenticated_user(): void
    {
        // Arrange
        $user = User::factory()->create();

        // Act
        $response = $this->actingAs($user)->get(route($this->create_route_name));

        // Assert
        $this->assertRedirectHome($response);
    }

    public function test_create_returns_view_for_guest_user(): void
    {
        // Act
        $response = $this->get(route($this->create_route_name));

        // Assert
        $this->assertViewResponse($response);
    }

    public function test_store_returns_back_with_success_when_email_is_valid_for_guest_user(): void
    {
        // Arrange
        $user = User::factory()->create();

        // Act
        $response = $this->from(route($this->create_route_name))->post(route($this->store_route_name, ['email' => $user->email]));

        // Assert
        $this->assertRedirectCreateRoute($response);
        $response->assertSessionHas('status');
    }

    /**
     * @dataProvider invalidEmails
     */
    public function test_store_returns_back_with_errors_when_email_is_invalid_for_guest_user(string $invalid_email): void
    {
        // Act
        $response = $this->from(route($this->create_route_name))->post(route($this->store_route_name, ['email' => $invalid_email]));

        // Assert
        $this->assertRedirectCreateRoute($response);
        $response->assertSessionHasErrors(['email']);
    }

    public function test_store_redirects_home_for_authenticated_user(): void
    {
        // Arrange
        $user = User::factory()->create();

        // Act
        $response = $this->actingAs($user)->post(route($this->store_route_name, ['email' => $user->email]));

        // Assert
        $this->assertRedirectHome($response);
    }

    private function assertRedirectCreateRoute(TestResponse $response): void
    {
        $response->assertRedirect(route($this->create_route_name));
    }

    public static function invalidEmails(): array
    {
        return [
            ['notUserEmail@gmail.com'],
            [''],
            ['notAnEmail'],
        ];
    }
}
