<?php

namespace App\Services;

use App\Http\Resources\MovieResource;
use App\Models\Movie;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class MovieService
{
    public function getAllMovies(): AnonymousResourceCollection
    {
        return $this->movieResourceCollection(Movie::all());
    }

    public function getMoviesBySearch(string $title): AnonymousResourceCollection
    {
        $tokens = explode(' ', $title);
        $movies = Movie::getByTokens($tokens)->get();


        return $this->movieResourceCollection($movies);
    }

    public function movieResource(Movie $movie): MovieResource
    {
        return MovieResource::make($movie);
    }

    public function movieResourceCollection($movies): AnonymousResourceCollection
    {
        return MovieResource::collection($movies);
    }
}
