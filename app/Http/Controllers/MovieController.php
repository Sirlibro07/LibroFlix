<?php

namespace App\Http\Controllers;

use App\Http\Resources\MovieResource;
use App\Models\Movie;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class MovieController extends Controller
{


    /**
     * Display the specified resource.
     */
    public function show(string $title): Response
    {
        return Inertia::render(
            'Show/Movie',
            [
                'isLoggedIn' => Auth::check(),
                'movie' => MovieResource::make(Movie::where("title", $title)->first())
            ]
        );
    }
}
