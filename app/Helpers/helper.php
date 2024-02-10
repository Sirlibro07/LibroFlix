<?php

use Illuminate\Mail\Mailable;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\URL;


function temporaryEmailVerificationSignedRoute($user): string
{
    return SignedRoute("verification.verify", 30, $user, $user->email_verification_token);
}


function SignedRoute(string $route, int $minutes, object $user, string $hash): string
{
    return URL::temporarySignedRoute($route, now()->addMinutes($minutes), ['id' => $user->id, 'hash' => $hash]);
}


function sendEmail(Mailable $mail)
{
    try {
        Log::info("tried to send email");
        Mail::send($mail);
    } catch (Exception $e) {
        Log::error("something went wrong ! " . $e->getMessage());
    }
}
