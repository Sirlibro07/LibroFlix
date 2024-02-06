<?php

namespace App\Traits;

use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

trait RenderPage
{
    public function renderAppPage(string $page, array $fields = []): Response
    {
        return Inertia::render('App/' . $page, array_merge(['isLoggedIn' => Auth::check()], $fields));
    }
}
