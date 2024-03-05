<?php

namespace App\Traits;


use Carbon\Carbon;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\URL;

trait SignedRouteManager
{
    function getSignedRouteManager(string $route, Carbon $ttl, string $email, string $token): string
    {
        $url = URL::temporarySignedRoute($route, $ttl, ['user' => $email, 'token' => $token]);
        if (app()->environment(['local', 'testing'])) {
            Log::info('signed route: ' . $url);
        }
        return $url;
    }
}
