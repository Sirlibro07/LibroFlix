<?php

namespace App\Traits;


use Carbon\Carbon;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\URL;

trait SignedRouteManager
{
    function getAuthSignedRoute(string $route, Carbon $ttl, string $email, string $token): string
    {
        return URL::temporarySignedRoute($route, $ttl, ['user' => $email, 'token' => $token]);
    }
}
