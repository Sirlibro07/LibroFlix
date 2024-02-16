<?php


use Illuminate\Support\Facades\URL;

function temporaryPasswordResetSignedRoute($user): string
{
    return SignedRoute('password.reset', 5, $user, $user->password_reset_token);
}

function temporaryEmailVerificationSignedRoute($user): string
{
    return SignedRoute("verification.verify", 30, $user, $user->email_verification_token);
}

function SignedRoute(string $route, int $minutes, object $user, string $hash): string
{
    return URL::temporarySignedRoute($route, now()->addMinutes($minutes), ['id' => $user->id, 'hash' => $hash]);
}
