<?php

namespace App\Http\Controllers;

use App\Services\MovieService;
use Inertia\Response;

class HomeController extends Controller
{
    private MovieService $movie_service;

    public function __construct(MovieService $movie_service)
    {
        $this->movie_service = $movie_service;
    }

    public function __invoke(): Response
    {
        return $this->renderAppView("Home", ['movies' => $this->movie_service->getAllMovies()]);
    }
}
