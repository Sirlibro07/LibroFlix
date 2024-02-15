<?php

namespace App\Listeners;

use App\Events\EmailVerificationNotificationRequested;
use App\Mail\VerificationEmail;
use App\Models\User;
use Illuminate\Contracts\Queue\ShouldQueue;

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
        $user = User::where("email", $event->email)->first();
        if (!$user->hasVerifiedEmail()) {
            $url = temporaryEmailVerificationSignedRoute($user);
            sendEmail(new VerificationEmail($user, $url));
        }
    }
}
