<?php

namespace Tests\Feature\Auth;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\Helper\RedirectsTest;
use Tests\TestCase;

class EmailVerificationNotificationControllerTest extends TestCase
{
    use RefreshDatabase, RedirectsTest;

    private string $store_route_name = 'email_verification_notification.store';

    public function test_store_redirects_to_login_for_guest_user(): void
    {
        // Act
        $response = $this->post(route('email_verification_notification.store'));

        // Assert
        $this->assertRedirectsToLogin($response);
    }

    public function test_store_redirects_back_with_success_for_authenticated_user(): void
    {
        // Arrange
        $user = User::factory()->create();
        $profile_edit_route = route('profile.edit');

        // Act
        $response = $this->actingAs($user)->from($profile_edit_route)->post(route('email_verification_notification.store'));

        // Assert
        $response->assertRedirect($profile_edit_route);
        $response->assertSessionHas('status');
    }


}
