<?php

namespace Tests\Unit\Services;

use App\Models\User;
use App\Services\PasswordService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class PasswordServiceTest extends TestCase
{
    use RefreshDatabase;
    private PasswordService $password_service;
    protected function setUp(): void
    {
        parent::setUp();

        $this->password_service = new PasswordService();
    }

    public function test_update_updates_authenticated_user_password(): void
    {
        // Arrange
        $user = User::factory()->create([
            'password' => 'old_password'
        ]);
        $new_password = 'new_password';

        // Act
        $this->actingAs($user)->password_service->update($new_password);

        // Assert
        $this->assertTrue(Hash::check($new_password, Auth::user()->password));
    }
}
