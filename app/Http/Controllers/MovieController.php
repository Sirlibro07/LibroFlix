<?php

namespace App\Http\Controllers;

use App\Http\Resources\MovieResource;
use App\Models\Movie;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class MovieController extends Controller
{

    public function index(string $title): Response
    {
        return $this->renderAppPage('App/SearchPage', [
            'movies' => MovieResource::collection(Movie::where('title', 'like', '%' . $title . '%')->get()),
            'title' => $title,
        ]);
    }

    public function show(string $title): Response
    {
        return $this->renderAppPage('App/Movie', [
            'movie' => MovieResource::make(Movie::where("title", $title)->firstOrFail()),
        ]);
    }

    private function renderAppPage(string $page, array $fields = []): Response
    {
        return Inertia::render($page, array_merge(['isLoggedIn' => Auth::check()], $fields));
    }
}
