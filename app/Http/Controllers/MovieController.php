<?php

namespace App\Http\Controllers;

use App\Http\Resources\MovieResource;
use App\Models\Movie;
use App\Services\MovieService;
use Illuminate\Support\Facades\Auth;
use Inertia\Response;

class MovieController extends Controller
{
    private MovieService $movie_service;

    public function __construct(MovieService $movie_service)
    {
        $this->movie_service = $movie_service;
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
            'movie' => MovieResource::make($movie),
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
