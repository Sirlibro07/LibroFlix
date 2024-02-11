<?php

namespace App\Listeners;

use App\Events\PasswordUpdateRequested;
use App\Mail\PasswordUpdatedEmail;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendPasswordUpdatedEmail implements ShouldQueue
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
    public function handle(PasswordUpdateRequested $event): void
    {
        $user = $event->user;

        generatePasswordResetToken($user);
        $url = temporaryPasswordResetSignedRoute($user);
        sendEmail(new PasswordUpdatedEmail($url, $user->email));
    }
}
