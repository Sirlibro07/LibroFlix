<?php

namespace Tests\Unit\Services;

use App\Http\Resources\MovieResource;
use App\Models\Movie;
use App\Models\User;
use App\Services\WatchlistItemService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\Log;
use Tests\TestCase;

class WatchlistItemServiceTest extends TestCase
{
    use RefreshDatabase;

    private WatchlistItemService $watchlist_item_service;

    protected function setUp(): void
    {
        parent::setUp();

        $this->watchlist_item_service = new WatchlistItemService();
    }

    public function test_getWatchlistItems_returns_authenticated_user_watchlist_items()
    {
        // Arrange
        $expected_movies = Movie::factory(3)->create();
        $not_expected_movies = Movie::factory(2)->create();
        $user = User::factory()->create();
        foreach ($expected_movies as $movie) {
            $user->movies()->attach($movie->id);
        }

        // Act
        $result = $this->actingAs($user)->watchlist_item_service->getWatchlistItems();

        // Assert
        $this->assertInstanceOf(AnonymousResourceCollection::class, $result);
        $this->assertCount(count($expected_movies), $result);
        foreach ($result as $i => $movie) {
            $this->assertEquals($expected_movies[$i]->id, $movie->id);
        }
    }

    public function test_isWatchlisted_returns_true_when_movie_is_watchlisted_for_authenticated_user(): void
    {
        // Arrange
        $movie = Movie::factory()->create();
        $user = User::factory()->create();
        $user->movies()->attach($movie->id);

        // Act
        $result = $this->actingAs($user)->watchlist_item_service->isWatchlisted($movie);

        // Assert
        $this->assertTrue($result);
    }

    public function test_isWatchlisted_returns_false_when_movie_is_not_watchlisted_for_authenticated_user(): void
    {
        // Arrange
        $movie = Movie::factory()->create();
        $user = User::factory()->create();

        // Act
        $result = $this->actingAs($user)->watchlist_item_service->isWatchlisted($movie);

        // Assert
        $this->assertFalse($result);
    }

    public function test_isWatchlisted_returns_false_for_guest_user(): void
    {
        // Arrange
        $movie = Movie::factory()->create();
        $user = User::factory()->create();
        $user->movies()->attach($movie->id);

        // Act
        $result = $this->watchlist_item_service->isWatchlisted($movie);

        // Assert
        $this->assertFalse($result);
    }

    public function test_store_creates_authenticated_user_watchlist_item(): void
    {
        // Arrange
        $expected_movie = Movie::factory()->create();
        $user = User::factory()->create();

        // Act
        $this->actingAs($user)->watchlist_item_service->store($expected_movie);

        // Assert
        $this->assertCount(1, $user->movies);
        $this->assertEquals($expected_movie->id, $user->movies[0]->id);
    }

    public function test_destroy_deletes_authenticated_user_watchlist_item()
    {
        // Arrange
        $movie = Movie::factory()->create();
        $user = User::factory()->create();
        $user->movies()->attach($movie);

        // Act
        $this->actingAs($user)->watchlist_item_service->destroy($movie);

        // Assert
        $this->assertCount(0, $user->movies);
    }
}
