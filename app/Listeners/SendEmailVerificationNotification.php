<?php

namespace App\Listeners;

use App\Events\EmailVerificationNotificationRequested;
use App\Mail\VerificationEmail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Log;

class SendEmailVerificationNotification implements ShouldQueue
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
    public function handle(EmailVerificationNotificationRequested $event): void
    {
        Log::info("reacher here");
        $user = $event->user;
        if (!$user->hasVerifiedEmail()) {

            $url = temporaryEmailVerificationSignedRoute($user);

            sendEmail(new VerificationEmail($user, $url));
        }
    }
}
