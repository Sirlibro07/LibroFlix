<?php

namespace App\Http\Controllers;

use App\Http\Resources\MovieResource;
use App\Models\Movie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{

    public function __invoke(Request $request): Response
    {
        return Inertia::render(
            'App/Home',
            [
                'isLoggedIn' => Auth::check(),
                'movies' => MovieResource::collection(Movie::all()),
            ]
        );
    }
}
