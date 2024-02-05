<?php

namespace App\Http\Controllers;

use App\Http\Resources\MovieResource;
use App\Models\Movie;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class MovieController extends Controller
{

    public function index(string $title)
    {
        return $title;
    }


    public function show(string $title): Response
    {
        return Inertia::render(
            'App/Movie/Show',
            [
                'isLoggedIn' => Auth::check(),
                'movie' => MovieResource::make(Movie::where("title", $title)->firstOrFail())
            ]
        );
    }
}
