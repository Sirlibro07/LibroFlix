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

    // public function render($request, Throwable $e)
    // {
    //     $response = parent::render($request, $e);

    //     $http_status_code = $response->status();
    //     Log::info($http_status_code);

    //     if (in_array($http_status_code, [500, 404, 403, 429, 419])) {
    //         $message = match ($http_status_code) {
    //             404 => "Are you sure this is the right place ?",
    //             403 => "Please go back, you are not allowed in here",
    //             429 => "Too many requests, please don't spam and try again in a few minutes",
    //             419 => "Page expired, please refresh the page",
    //             500 => "Something went wrong, please try again later",
    //             default => "ciap"
    //         };

    //         return Inertia::render("Error/ErrorPage", ["message" => $message])
    //             ->toResponse($request)
    //             ->setStatusCode($http_status_code);
    //     }

    //     return $response;
    // }
}
