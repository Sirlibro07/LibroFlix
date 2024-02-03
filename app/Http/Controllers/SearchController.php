<?php

namespace App\Http\Controllers;



class SearchController extends Controller
{
    public function search(string $title)
    {
        return $title;
    }
}
