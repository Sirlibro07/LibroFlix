<?php

namespace App\Services;

use App\Http\Resources\MovieResource;
use App\Models\Movie;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class MovieService
{
    public function getAllMovies(): AnonymousResourceCollection
    {
        return MovieResource::collection(Movie::all());
    }

    public function getMoviesBySearch(string $title): AnonymousResourceCollection
    {
        $tokens = explode(' ', $title);
        $movies = Movie::SearchByTokens($tokens)->get();

        return MovieResource::collection($movies);
    }
}
