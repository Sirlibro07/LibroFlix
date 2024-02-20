<?php

namespace App\Traits;


use Inertia\Inertia;
use Inertia\Response;

trait ViewRenderer
{
    public function renderAppView(string $page, array $fields = []): Response
    {
        return $this->renderInertia('App/' . $page, $fields);
    }

    public function renderAuthView(string $page, array $fields = []): Response
    {
        return $this->renderInertia('Auth/' . $page, $fields);
    }

    public function renderInertia(string $path, array $fields = []): Response
    {
        return Inertia::render($path, $fields);
    }
}
