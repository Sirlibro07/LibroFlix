<?php

namespace App\Http\Controllers;

use App\Http\Resources\MovieResource;
use App\Models\Movie;
use Inertia\Response;

class HomeController extends Controller
{

    public function __invoke(): Response
    {
        return $this->renderAppPage("Home", ['movies' => MovieResource::collection(Movie::all())]);
    }
}
