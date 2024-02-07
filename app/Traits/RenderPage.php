<?php

namespace App\Traits;


use Inertia\Inertia;
use Inertia\Response;

trait RenderPage
{
    public function renderAppPage(string $page, array $fields = []): Response
    {
        return Inertia::render('App/' . $page, $fields);
    }
}
