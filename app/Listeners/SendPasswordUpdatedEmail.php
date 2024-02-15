<?php

namespace App\Listeners;

use App\Events\PasswordUpdateRequested;
use App\Mail\PasswordUpdatedEmail;
use App\Models\User;
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
        $user = User::where("email", $event->email)->first();

        generatePasswordResetToken($user);
        $url = temporaryPasswordResetSignedRoute($user);
        sendEmail(new PasswordUpdatedEmail($url, $user->email));
    }
}
