<?php

namespace Tests\Feature;

use App\Models\Movie;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;
use Tests\Helper\ViewTest;
use Tests\TestCase;

class HomeControllerTest extends TestCase
{
    use RefreshDatabase, ViewTest;

    private string $home_route_name = 'home';

    public function test_invoke_returns_correct_view(): void
    {
        // Act
        $response = $this->get(route($this->home_route_name));

        // Assert
        $this->assertViewResponse($response);
    }
}
