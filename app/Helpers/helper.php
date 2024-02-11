<?php

use Illuminate\Mail\Mailable;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Str;



function temporaryPasswordResetSignedRoute($user): string
{
    return SignedRoute('password.reset', 5, $user, $user->password_reset_token);
}

function temporaryEmailVerificationSignedRoute($user): string
{
    return SignedRoute("verification.verify", 30, $user, $user->email_verification_token);
}

function generatePasswordResetToken($user): void
{
    $user->password_reset_token =  base64_encode(Str::random(60));
    $user->save();
}


function SignedRoute(string $route, int $minutes, object $user, string $hash): string
{
    return URL::temporarySignedRoute($route, now()->addMinutes($minutes), ['id' => $user->id, 'hash' => $hash]);
}


function sendEmail(Mailable $mail): void
{
    try {
        Log::info("tried to send email");
        Mail::send($mail);
    } catch (Exception $e) {
        Log::error("something went wrong ! " . $e->getMessage());
    }
}
