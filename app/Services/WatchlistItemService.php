<?php

namespace App\Services;

use App\Http\Resources\MovieResource;
use App\Models\Movie;
use Illuminate\Support\Facades\Auth;

class WatchlistItemService
{

    public function getWatchlistItems()
    {
        return MovieResource::collection(Auth::user()->movies);
    }

    public function isWatchlisted(Movie $movie): bool
    {
        return Auth::check() && (bool) $movie->users()->where('id', Auth::id())->first();
    }

    public function store(Movie $movie)
    {
        $movie->users()->attach(Auth::id());
    }

    public function destroy(Movie $movie)
    {
        $movie->users()->detach(Auth::id());
    }
}
