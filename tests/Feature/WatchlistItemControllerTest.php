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
    private string $watchlist_items_index_route_name = 'watchlist_items.index';
    private string $watchlist_items_store_route_name = 'watchlist_items.store';
    private string $watchlist_items_destroy_route_name = 'watchlist_items.destroy';

    public function test_index_redirects_to_login_for_guest_user(): void
    {
        // Act
        $response = $this->get(route($this->watchlist_items_index_route_name));

        // Assert
        $this->assertRedirectsToLogin($response);
    }

    public function test_index_returns_view_for_authenticated_user()
    {
        // Arrange
        $user = User::factory()->create();

        // Act
        $response = $this->actingAs($user)->get(route($this->watchlist_items_index_route_name));

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
        $response = $this->actingAs($user)->from($movie_route)->post(route($this->watchlist_items_store_route_name, $movie->slug));

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
        $response = $this->actingAs($user)->from($movie_route)->post(route($this->watchlist_items_store_route_name, $incorrect_slug));

        // Assert
        $response->assertNotFound();
    }

    public function test_store_redirects_to_login_for_guest_user()
    {
        // Arrange
        $movie = Movie::factory()->create();

        // Act
        $response = $this->post(route($this->watchlist_items_store_route_name, $movie->slug));

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
        $response = $this->actingAs($user)->from($movie_route)->delete(route($this->watchlist_items_destroy_route_name, $movie->slug));

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
        $response = $this->actingAs($user)->from($movie_route)->delete(route($this->watchlist_items_destroy_route_name, $incorrect_slug));

        // Assert
        $response->assertNotFound();
    }

    public function test_destroy_redirects_to_login_for_guest_user()
    {
        // Arrange
        $movie = Movie::factory()->create();

        // Act
        $response = $this->delete(route($this->watchlist_items_destroy_route_name, $movie->slug));

        // Assert
        $this->assertRedirectsToLogin($response);
    }
}
