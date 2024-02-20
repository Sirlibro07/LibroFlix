<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use App\Services\MovieService;
use App\Services\WatchlistItemService;
use Illuminate\Support\Facades\Auth;
use Inertia\Response;

class MovieController extends Controller
{
    public MovieService $movie_service;
    public WatchlistItemService $watchlist_item_service;

    public function __construct(MovieService $movie_service, WatchlistItemService $watchlist_item_service)
    {
        $this->movie_service = $movie_service;
        $this->watchlist_item_service = $watchlist_item_service;
    }

    public function index(string $title = ''): Response
    {
        return $this->renderAppView('Search', [
            'movies' => $this->movie_service->getMoviesBySearch($title),
            'title' => $title,
        ]);
    }

    public function show(Movie $movie): Response
    {
        return $this->renderAppView('Movie', [
            'movie' => $this->movie_service->movieSingleResource($movie),
            'watchlisted' => $this->watchlist_item_service->isWatchlisted($movie),
        ]);
    }

    public function watch(Movie $movie): Response
    {
        return $this->renderAppView('Watch', [
            'has_verified_email' => Auth::user()->hasVerifiedEmail(),
            'movie_title' => $movie->title
        ]);
    }
}
