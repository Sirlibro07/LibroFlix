<?php

namespace App\Listeners;

use App\Events\Registered;
use App\Mail\WelcomeEmail;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendWelcomeEmail implements ShouldQueue
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
    public function handle(Registered $event): void
    {
        $user = $event->user;
        $url = temporaryEmailVerificationSignedRoute($user);

        sendEmail(new WelcomeEmail($user, $url));
    }
}
