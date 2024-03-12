<?php

namespace Tests\Helper;

use Illuminate\Testing\TestResponse;

trait RedirectsTest
{
    public function assertRedirectHome(TestResponse $response): void
    {
        $response->assertStatus(302);
        $response->assertRedirect(route('home'));
    }

    public function assertRedirectsToLogin(TestResponse $response): void
    {
        // Assert
        $response->assertStatus(302);
        $response->assertRedirect(route('login.create'));
    }
}
