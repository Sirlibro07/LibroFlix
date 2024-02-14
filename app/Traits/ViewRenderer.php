<?php

namespace App\Traits;


use Inertia\Inertia;
use Inertia\Response;

trait ViewRenderer
{
    public function renderAppView(string $page, array $fields = []): Response
    {
        return Inertia::render('App/' . $page, $fields);
    }

    public function renderAuthView(string $page, array $fields = []): Response
    {
        return Inertia::render('Auth/' . $page, $fields);
    }
}
