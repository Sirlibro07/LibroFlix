<?php

namespace App\Http\Controllers;

use App\Http\Resources\MovieResource;
use App\Models\Movie;
use App\Repositories\MovieRepository;
use Illuminate\Support\Facades\Auth;
use Inertia\Response;

class MovieController extends Controller
{
    private MovieRepository $movie_repository;

    public function __construct(MovieRepository $movie_repository)
    {
        $this->movie_repository = $movie_repository;
    }

    public function index(string $title = ''): Response
    {
        return $this->renderAppView('Search', [
            'movies' => $this->movie_repository->getMoviesBySearch($title),
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
