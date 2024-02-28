<?php

namespace App\Traits;


use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\File;

trait ViewManager
{
    public function renderAppView(string $page, array $fields = []): Response
    {
        return $this->renderInertia('App/' . $page, $fields);
    }

    public function renderAuthView(string $page, array $fields = []): Response
    {
        return $this->renderInertia('Auth/' . $page, $fields);
    }

    private function renderInertia(string $path, array $fields = []): Response
    {
        $view_file_path = base_path('resources/js/Pages/' . $path . ".tsx");

        if (!File::exists($view_file_path)) {
            abort(500);
        }

        return Inertia::render($path, $fields);
    }
}
