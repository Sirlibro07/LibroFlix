<?php

namespace Tests\Feature;

use App\Models\Movie;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Log;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class MovieControllerTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @dataProvider titlesData
     */
    public function test_index_returns_correct_view($title_data): void
    {
        // arrange
        $title = $title_data;
        Log::info($title_data);

        // Act
        $response = $this->get(route('movies.index', $title));

        // Assert
        $response->assertOk();
        $response->assertInertia(function (AssertableInertia $page) use ($title) {
            $page->has('movies');
            $page->where('title', $title);
        });
    }

    public function test_show_returns_correct_view_when_slug_route_parameter_is_correct()
    {
        // Arrange
        $expected_movie = Movie::factory()->create();

        // Act
        $response = $this->get(route('movies.show', $expected_movie->slug));

        // Assert
        $response->assertOk();
        $response->assertInertia(fn (AssertableInertia $page) => $page->has('movie'));
    }

    public function test_show_returns_404_if_slug_parameter_is_incorrect()
    {
        // Arrange
        $expected_movie = Movie::factory()->create();
        $incorrect_slug = $expected_movie->slug . 'hello';

        // Act
        $response = $this->get(route('movies.show', $incorrect_slug));

        // Assert
        $response->assertNotFound();
    }

    public function test_watch_returns_correct_view_when_slug_route_parameter_is_correct_for_authenticated_user()
    {
        // Arrange
        $user = User::factory()->create();
        $expected_movie = Movie::factory()->create();

        // Act
        $response = $this->actingAs($user)->get(route('movies.watch', $expected_movie->slug));

        // Assert
        $response->assertOk();
        $response->assertInertia(function (AssertableInertia $page) use ($expected_movie) {
            $page->has('has_verified_email');
            $page->where('movie_title', $expected_movie->title);
        });
    }

    public function test_watch_redirects_to_login_for_guest_user()
    {
        // Act
        $response = $this->get(route('movies.watch', 'slug'));

        // Assert
        $response->assertStatus(302);
        $response->assertRedirect(route('login.create'));
    }

    public function test_watch_returns_404_if_slug_parameter_is_incorrect_for_authenticated_user()
    {
        // Arrange
        $user = User::factory()->create();
        $expected_movie = Movie::factory()->create();
        $incorrect_slug = $expected_movie->slug . 'hello';

        // Act
        $response = $this->actingAs($user)->get(route('movies.watch', $incorrect_slug));

        // Assert
        $response->assertNotFound();
    }

    public static function titlesData(): array
    {
        return [
            ['title' => 'title'],
            ['title' => '']
        ];
    }
}
