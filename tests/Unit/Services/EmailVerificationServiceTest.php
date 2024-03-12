<?php

namespace Tests\Unit\Services;

use App\Mail\EmailVerificationNotification;
use App\Models\User;
use App\Services\EmailVerificationService;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;

class EmailVerificationServiceTest extends TestCase
{
    use RefreshDatabase;
    private EmailVerificationService $email_verification_service;
    protected function setUp(): void
    {
        parent::setUp();

        $this->email_verification_service = new EmailVerificationService();
    }

    public function test_sendEmailVerificationNotification_sends_email_if_user_can_be_found_by_email(): void
    {
        // Arrange
        $user = User::factory()->create();
        Mail::fake();

        // Act
        $this->email_verification_service->sendEmailVerificationNotification($user->email);

        // Assert
        Mail::assertSent(EmailVerificationNotification::class);
    }

    public function test_sendEmailVerificationNotification_trows_404_if_user_can_not_be_found_by_email(): void
    {
        // Arrange
        Mail::fake();

        // Assert (I have to put this part up here due to the way phpunit works)
        $this->expectException(ModelNotFoundException::class);

        // Act
        $this->email_verification_service->sendEmailVerificationNotification('@gmail.com');

        // Assert
        Mail::assertNothingSent();
    }

    public function test_verifyEmail_marks_user_email_as_verified_and_makes_user_email_verification_token_null_if_token_matches_user_email_verification_token(): void
    {
        // Arrange
        $token = 'token';
        $user = User::factory()->create([
            'email_verification_token' => $token,
        ]);

        // Act
        $this->email_verification_service->verifyEmail($user, $token);

        // Assert
        $this->assertNotNull($user->email_verified_at);
        $this->assertNull($user->email_verification_token);
    }
}
