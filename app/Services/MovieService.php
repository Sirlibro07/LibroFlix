<?php

namespace App\Services;

use App\Http\Resources\MovieResource;
use App\Models\Movie;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class MovieService
{
    public function getAllMovies(): AnonymousResourceCollection
    {
        return $this->movieCollection(Movie::all());
    }

    public function getMoviesBySearch(string $title): AnonymousResourceCollection
    {
        $tokens = explode(' ', $title);
        $movies = Movie::getByTokens($tokens)->get();


        return $this->movieCollection($movies);
    }

    public function movieSingleResource(Movie $movie): MovieResource
    {
        return MovieResource::make($movie);
    }

    public function movieCollection($movies): AnonymousResourceCollection
    {
        return MovieResource::collection($movies);
    }
}
