<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * The list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    public function render($request, Throwable $e)
    {
        $response = parent::render($request, $e);

        $http_status_code = $response->status();
        Log::info($http_status_code);

        if (app()->environment(['local', 'testing']) && in_array($http_status_code, [500, 404, 403, 429, 419])) {
            return Inertia::render("Error/ErrorPage", ["http_status_code" => $http_status_code])
                ->toResponse($request)
                ->setStatusCode($http_status_code);
        }

        return $response;
    }
}
