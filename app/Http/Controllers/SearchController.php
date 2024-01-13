<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function search(string $filter, string $name)
    {
        return $filter . "<br>" . $name;
    }
}
