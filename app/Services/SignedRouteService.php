<?php

namespace App\Services;

use Carbon\Carbon;
use Illuminate\Support\Facades\URL;

class SignedRouteService
{
    function signedRoute(string $route, Carbon $ttl, string $email, string $token): string
    {
        return URL::temporarySignedRoute($route, $ttl, ['email' => $email, 'token' => $token]);
    }
}
