<?php

namespace Tests\Feature;

use App\Models\Movie;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Testing\TestResponse;
use Inertia\Testing\AssertableInertia;
use Tests\Helper\RedirectsTest;
use Tests\Helper\ViewTest;
use Tests\TestCase;

class WatchlistItemControllerTest extends TestCase
{
    use RefreshDatabase, ViewTest, RedirectsTest;

    public function test_index_redirects_to_login_for_guest_user(): void
    {
        // Act
        $response = $this->get(route('watchlist_items.index'));

        // Assert
        $this->assertRedirectsToLogin($response);
    }

    public function test_index_returns_view_for_authenticated_user()
    {
        // Arrange
        $user = User::factory()->create();

        // Act
        $response = $this->actingAs($user)->get(route('watchlist_items.index'));

        // Assert
        $this->assertViewResponse($response);
    }

    public function test_store_redirects_back_when_slug_route_parameter_is_correct_for_authenticated_user()
    {
        // Arrange
        $user = User::factory()->create();
        $movie = Movie::factory()->create();
        $movie_route = route('movies.show', $movie->slug);

        // Act
        $response = $this->actingAs($user)->from($movie_route)->post(route('watchlist_items.store', $movie->slug));

        // Assert
        $response->assertRedirect($movie_route);
    }

    public function test_store_returns_404_if_slug_parameter_is_incorrect_for_authenticated_user()
    {
        // Arrange
        $user = User::factory()->create();
        $movie = Movie::factory()->create();
        $incorrect_slug = $movie->slug . 'hello';
        $movie_route = route('movies.show', $movie->slug);

        // Act
        $response = $this->actingAs($user)->from($movie_route)->post(route('watchlist_items.store', $incorrect_slug));

        // Assert
        $response->assertNotFound();
    }

    public function test_store_redirects_to_login_for_guest_user()
    {
        // Arrange
        $movie = Movie::factory()->create();

        // Act
        $response = $this->post(route('watchlist_items.store', $movie->slug));

        // Assert
        $this->assertRedirectsToLogin($response);
    }

    public function test_destroy_redirects_back_when_slug_route_parameter_is_correct_for_authenticated_user()
    {
        // Arrange
        $movie = Movie::factory()->create();
        $user = User::factory()->create();
        $movie_route = route('movies.show', $movie->slug);

        // Act
        $response = $this->actingAs($user)->from($movie_route)->delete(route('watchlist_items.destroy', $movie->slug));

        // Assert
        $response->assertRedirect($movie_route);
    }

    public function test_destroy_returns_404_if_slug_parameter_is_incorrect_for_authenticated_user()
    {
        // Arrange
        $movie = Movie::factory()->create();
        $user = User::factory()->create();
        $incorrect_slug = $movie->slug . 'hello';
        $movie_route = route('movies.show', $movie->slug);

        // Act
        $response = $this->actingAs($user)->from($movie_route)->delete(route('watchlist_items.destroy', $incorrect_slug));

        // Assert
        $response->assertNotFound();
    }

    public function test_destroy_redirects_to_login_for_guest_user()
    {
        // Arrange
        $movie = Movie::factory()->create();

        // Act
        $response = $this->delete(route('watchlist_items.destroy', $movie->slug));

        // Assert
        $this->assertRedirectsToLogin($response);
    }
}
