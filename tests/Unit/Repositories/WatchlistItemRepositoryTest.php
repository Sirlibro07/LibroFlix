<?php

namespace Tests\Unit\Repositories;

use App\Models\Movie;
use App\Models\User;
use App\Repositories\WatchlistItemRepository;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Tests\TestCase;

class WatchlistItemRepositoryTest extends TestCase
{
    use RefreshDatabase;

    private WatchlistItemRepository $watchlist_item_repository;

    protected function setUp(): void
    {
        parent::setUp();

        $this->watchlist_item_repository = new WatchlistItemRepository();
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
        $result = $this->actingAs($user)->watchlist_item_repository->getWatchlistItems();

        // Assert
        $this->assertInstanceOf(AnonymousResourceCollection::class, $result);
        $this->assertCount(count($expected_movies), $result);
        foreach ($result as $i => $movie) {
            $this->assertEquals($expected_movies[$i]->id, $movie->id);
        }
    }
}
