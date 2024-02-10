<?php

namespace App\Listeners;

use App\Events\PasswordResetRequested;
use App\Mail\PasswordResetEmail;
use App\Mail\WelcomeEmail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class SendPasswordResetEmail implements ShouldQueue
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(PasswordResetRequested $event): void
    {
        $user = $event->user;
        if ($user) {
            $user->password_reset_token =  base64_encode(Str::random(60));
            $user->save();
            $url = SignedRoute('password.reset', 5, $user, $user->password_reset_token);

            sendEmail(new PasswordResetEmail($user, $url));
        }
    }
}
