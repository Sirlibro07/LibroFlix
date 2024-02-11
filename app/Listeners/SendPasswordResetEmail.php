<?php

namespace App\Listeners;

use App\Events\PasswordResetEmailRequested;
use App\Mail\PasswordResetEmail;
use App\Models\User;
use Illuminate\Contracts\Queue\ShouldQueue;

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
    public function handle(PasswordResetEmailRequested $event): void
    {
        $user = User::where("email", $event->email)->first();
        if ($user) {
            generatePasswordResetToken($user);
            $url = temporaryPasswordResetSignedRoute($user);

            sendEmail(new PasswordResetEmail($user, $url));
        }
    }
}
