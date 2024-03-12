<?php

namespace App\Http\Controllers;

use App\Repositories\MovieRepository;
use Inertia\Response;

class HomeController extends Controller
{
    private MovieRepository $movie_repository;

    public function __construct(MovieRepository $movie_repository)
    {
        $this->movie_repository = $movie_repository;
    }

    public function __invoke(): Response
    {
        return $this->renderAppView("Home", ['movies' => $this->movie_repository->getAllMovies()]);
    }
}
