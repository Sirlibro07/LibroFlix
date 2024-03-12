<?php

namespace Tests\Unit\Services;

use App\Models\User;
use App\Services\AuthenticatedSessionService;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Auth;
use Tests\TestCase;

class AuthenticatedSessionServiceTest extends TestCase
{
    use RefreshDatabase;

    private AuthenticatedSessionService $authenticated_session_service;

    protected function setUp(): void
    {
        parent::setUp();

        $this->authenticated_session_service = new AuthenticatedSessionService();
    }

    /**
     * @throws AuthenticationException
     */
    public function test_store_trows_authentication_exception_when_credentials_are_incorrect(): void
    {
        // Arrange
        $user = User::factory()->create([
            'password' => 'password123',
        ]);
        $incorrect_credentials = ['email' => $user->email, 'password' => 'incorrect_password'];

        // Assert (I have to put this part up here due to the way phpunit works)
        $this->expectException(AuthenticationException::class);

        // Act
        $this->authenticated_session_service->store($incorrect_credentials, false);
    }

    public function test_store_logs_user_in_when_credentials_are_correct(): void
    {
        // Arrange
        $password = 'password123';
        $user = User::factory()->create([
            'password' => $password,
        ]);
        $credentials = ['email' => $user->email, 'password' => $password];

        // Act
        $this->authenticated_session_service->store($credentials, false);

        // Assert
        $this->assertEquals(Auth::id(), $user->id);
    }

    public function test_destroy_logs_user_out(): void
    {
        // Arrange
        $user = User::factory()->create();

        // Act
        $this->actingAs($user)->authenticated_session_service->destroy();

        // Assert
        $this->assertFalse(Auth::check());
    }
}
