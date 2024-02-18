<?php

namespace App\Http\Controllers;

use App\Http\Resources\MovieResource;
use App\Models\Movie;
use App\Models\WatchlistItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Response;

class MovieController extends Controller
{

    public function index(string $title = ""): Response
    {
        return $this->renderAppView('Search', [
            'movies' => MovieResource::collection(Movie::where('title', 'like', '%' . $title . '%')->get()),
            'title' => $title,
        ]);
    }

    public function show(string $slug): Response
    {
        $movie = Movie::where("slug", $slug)->firstOrFail();
        return $this->renderAppView('Movie', [
            'movie' => MovieResource::make($movie),
            'watchlisted' => (bool) Auth::check() && WatchlistItem::where("user_id", Auth::id())->where("movie_id", $movie->id)->first(),
        ]);
    }

    public function watch(string $slug, Request $request)
    {
        $movie = Movie::where("slug", $slug)->firstOrFail();

        return $this->renderAppView("Watch", [
            'has_verified_email' => $request->user()->hasVerifiedEmail(),
            'film_title' => $movie->title
        ]);
    }
}
