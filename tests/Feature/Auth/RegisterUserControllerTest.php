<?php

namespace Auth;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class RegisterUserControllerTest extends TestCase
{
    use RefreshDatabase;

    public function test_create_returns_view_for_guest_user(): void
    {
        // Act
        $response = $this->get(route('register.create'));

        // Assert
        $response->assertOk();
        $response->assertInertia();
    }

    public function test_create_redirects_to_home_for_authenticated_users(): void
    {
        //Arrange
        $user = User::factory()->create();

        // Act
        $response = $this->actingAs($user)->get(route('register.create'));

        // Assert
        $response->assertStatus(302);
        $response->assertRedirect(route('home'));
    }
}
