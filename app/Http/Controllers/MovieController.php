<?php

namespace App\Http\Controllers;

use App\Http\Resources\MovieResource;
use App\Models\Movie;
use Inertia\Response;

class MovieController extends Controller
{

    public function index(string $title): Response
    {
        return $this->renderAppPage('SearchPage', [
            'movies' => MovieResource::collection(Movie::where('title', 'like', '%' . $title . '%')->get()),
            'title' => $title,
        ]);
    }

    public function show(string $title): Response
    {
        return $this->renderAppPage('Movie', [
            'movie' => MovieResource::make(Movie::where("title", $title)->firstOrFail()),
        ]);
    }
}
