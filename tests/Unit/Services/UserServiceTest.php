<?php

namespace Tests\Unit\Services;

use App\Models\User;
use App\Services\UserService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Log;
use Tests\TestCase;

class UserServiceTest extends TestCase
{
    use RefreshDatabase;

    private UserService $user_service;

    /**
     * @return void
     */

    protected function setUp(): void
    {
        parent::setUp();
        $this->user_service = new UserService();
    }

    public function test_update_with_different_name_only_updates_user_data(): void
    {
        // Arrange
        $user = User::factory()->create();
        $user_name = $user->name;
        $user_email = $user->email;
        $data = ['name' => 'fabio'];

        // Act
        $this->actingAs($user)->user_service->update($data);

        // Assert
        $updated_user = User::first();
        $this->assertNotEquals($user_name, $updated_user->name);
    }

    public function test_update_with_different_email_updates_user_data_and_email_verification_columns(): void
    {
        // Arrange
        $user = User::factory()->create();
        $user_name = $user->name;
        $user_email = $user->email;
        $data = ['name' => 'fabio', 'email' => 'fabio@gmail.com'];

        // Act
        $this->actingAs($user)->user_service->update($data);

        // Assert
        $updated_user = User::first();
        $this->assertNotEquals($user_name, $updated_user->name);
        $this->assertNotEquals($user_email, $updated_user->email);
    }

    public function test_destroy_deletes_user()
    {
        // Arrange
        $user = User::factory()->create();

        // Act
        $this->actingAs($user)->user_service->destroy();

        // Assert
        $this->assertCount(0, User::all());
    }


}
