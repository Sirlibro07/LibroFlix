<?php

namespace Tests\Unit\Services;

use App\Mail\PasswordResetEmail;
use App\Models\User;
use App\Services\PasswordResetService;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\MessageBag;
use Tests\TestCase;

class PasswordResetServiceTest extends TestCase
{
    use RefreshDatabase;

    private PasswordResetService $password_reset_service;

    protected function setUp(): void
    {
        parent::setUp();

        $this->password_reset_service = new PasswordResetService();
    }

    public function test_sendPasswordResetEmail_sends_email_if_user_can_be_found_by_email(): void
    {
        // Arrange
        $user = User::factory()->create();
        Mail::fake();

        // Act
        $this->password_reset_service->sendPasswordResetEmail($user->email, '');

        // Assert
        Mail::assertSent(PasswordResetEmail::class);
    }

    public function test_sendPasswordResetEmail_trows_404_if_user_can_not_be_found_by_email(): void
    {
        // Arrange
        Mail::fake();

        // Assert (I have to put this part up here due to the way phpunit works)
        $this->expectException(ModelNotFoundException::class);

        // Act
        $this->password_reset_service->sendPasswordResetEmail('@gmail.com', '');

        // Assert
        Mail::assertNothingSent();
    }

    public function test_generateAndStorePasswordResetToken_generates_and_stores_password_reset_token_in_user_column(): void
    {
        // Arrange
        $user = User::factory()->create();

        // Act
        $this->password_reset_service->generateAndStorePasswordResetToken($user);

        // Assert
        $this->assertNotNull($user->password_reset_token);
    }

    public function test_isTokenValid_returns_false_if_token_is_not_the_same(): void
    {
        // Arrange
        $user = User::factory()->create([
            'password_reset_token' => 'newToken'
        ]);
        $incorrect_token = 'incorrect_token';

        // Act
        $result = $this->password_reset_service->isTokenValid($user->password_reset_token,$incorrect_token);

        // Assert
        $this->assertFalse($result);
    }

    public function test_isTokenValid_returns_false_if_token_is_not_the_same_and_session_has_token_error(): void
    {
        // Arrange
        $user = User::factory()->create([
            'password_reset_token' => 'newToken'
        ]);
        $incorrect_token = 'incorrect_token';
        $this->storeSessionTokenError();

        // Act
        $result = $this->password_reset_service->isTokenValid($user->password_reset_token,$incorrect_token);

        // Assert
        $this->assertFalse($result);
    }

    public function test_isTokenValid_returns_false_if_session_has_token_error(): void
    {
        // Arrange
        $user = User::factory()->create([
            'password_reset_token' => 'newToken'
        ]);
        $this->storeSessionTokenError();

        // Act
        $result = $this->password_reset_service->isTokenValid($user->password_reset_token,$user->password_reset_token);

        // Assert
        $this->assertFalse($result);
    }

    public function test_isTokenValid_returns_true_if_token_is_correct_and_there_is_no_token_session_error(): void
    {
        // Arrange
        $user = User::factory()->create([
            'password_reset_token' => 'newToken'
        ]);

        // Act
        $result = $this->password_reset_service->isTokenValid($user->password_reset_token,$user->password_reset_token);

        // Assert
        $this->assertTrue($result);
    }

    public function test_resetPassword_updates_user_password_and_makes_password_reset_token_null(): void
    {
        // Arrange
        $user = User::factory()->create([
            'password' => 'old_password'
        ]);
        $new_password = 'new_password';

        // Act
        $this->password_reset_service->resetPassword($user, $new_password);

        // Assert
        $this->assertTrue(Hash::check($new_password, $user->password));
        $this->assertNull($user->password_reset_token);
    }

    private function storeSessionTokenError(): void
    {
        $errors = new MessageBag(['token' => ['The token is invalid.']]);
        Session::put('errors', $errors);
    }

}
