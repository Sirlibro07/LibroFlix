<?php

namespace App\Services;

use Illuminate\Support\Facades\URL;

class SignedRouteService
{
    function SignedRoute(string $route, int $minutes, string $email, string $token): string
    {
        return URL::temporarySignedRoute($route, now()->addMinutes($minutes), ['email' => $email, 'token' => $token]);
    }
}
