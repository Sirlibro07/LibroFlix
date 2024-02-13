<?php

namespace App\Http\Controllers;

use App\Http\Resources\MovieResource;
use App\Models\Movie;
use Illuminate\Http\Request;
use Inertia\Response;

class MovieController extends Controller
{

    public function index(string $title = ""): Response
    {
        return $this->renderAppView('SearchPage', [
            'movies' => MovieResource::collection(Movie::where('title', 'like', '%' . $title . '%')->get()),
            'title' => $title,
        ]);
    }

    public function show(string $title): Response
    {
        return $this->renderAppView('Movie', [
            'movie' => MovieResource::make(Movie::where("title", $title)->firstOrFail()),
        ]);
    }

    public function watch(string $title, Request $request)
    {
        $movie = Movie::where("title", $title)->firstOrFail();

        return $this->renderAppView("Watch", [
            'has_verified_email' => $request->user()->hasVerifiedEmail(),
            'title' => $movie->title
        ]);
    }
}
