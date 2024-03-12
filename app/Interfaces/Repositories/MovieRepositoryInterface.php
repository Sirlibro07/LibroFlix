<?php

namespace App\Interfaces\Repositories;

use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

interface MovieRepositoryInterface
{
    public function getAllMovies(): AnonymousResourceCollection;

    public function getMoviesBySearch(string $title): AnonymousResourceCollection;
}
