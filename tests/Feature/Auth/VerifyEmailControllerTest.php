<?php

namespace Tests\Feature\Auth;

use App\Models\User;
use App\Services\EmailVerificationService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\URL;
use Tests\TestCase;

class VerifyEmailControllerTest extends TestCase
{
    use RefreshDatabase;
    private EmailVerificationService $email_verification_service;
    private string $email_verification_route_name = 'verification.verify';
    protected function setUp(): void
    {
        parent::setUp();

        $this->email_verification_service = new EmailVerificationService();
    }

    public function test_invoke_redirects_to_profile_edit_with_success_if_email_is_correct(): void
    {
        // Arrange
        $user = User::factory()->create();
        $signed_route = $this->email_verification_service->signedEmailVerificationRoute($user);

        // Act
        $response = $this->get($signed_route);

        // Assert
        $response->assertStatus(302);
        $response->assertRedirect(route('profile.edit'));
        $response->assertSessionHas('status');
    }

    public function test_invoke_returns_403_if_uri_is_modified(): void
    {
        // Arrange
        $user = User::factory()->create();
        $signed_route = $this->email_verification_service->signedEmailVerificationRoute($user);
        $url = $signed_route . 'hello';

        // Act
        $response = $this->get($url);

        // Assert
        $response->assertStatus(403);
    }

    public function test_invoke_returns_404_if_email_parameter_is_incorrect(): void
    {
        // Arrange
        $email_verification_token = 'email_token';
        $user = User::factory()->create([
            'email' => 'libro@gmail.com',
            'email_verification_token' => $email_verification_token,
        ]);
        $signed_route = URL::temporarySignedRoute($this->email_verification_route_name, now()->addHour(), ['user' => 'incorrect_email@gmail.com', 'token' => $email_verification_token]);

        // Act
        $response = $this->get($signed_route);

        // Assert
        $response->assertNotFound();
    }
}
