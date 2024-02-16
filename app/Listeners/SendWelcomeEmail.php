<?php

namespace App\Listeners;

use App\Events\Registered;
use App\Mail\WelcomeEmail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Log;

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
        Log::info("reached send welcome email");
        $user = $event->user;
        $url = temporaryEmailVerificationSignedRoute($user);

        sendEmail(new WelcomeEmail($user, $url));
    }
}
