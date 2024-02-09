<?php

use Illuminate\Support\Facades\URL;


function temporaryEmailVerificationSignedRoute($user): string
{
    return SignedRoute("verification.verify", 30, $user);
}


function SignedRoute(string $route, int $minutes, object $user): string
{
    return URL::temporarySignedRoute($route, now()->addMinutes($minutes), ['id' => $user->id, 'hash' => $user->email_verification_token]);
}
