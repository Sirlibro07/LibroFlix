<?php

namespace App\Repositories;

use App\Http\Resources\MovieResource;
use App\Interfaces\Repositories\MovieRepositoryInterface;
use App\Models\Movie;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class MovieRepository implements MovieRepositoryInterface
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
