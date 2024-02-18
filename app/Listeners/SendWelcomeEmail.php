<?php

namespace App\Listeners;

use App\Events\Registered;
use App\Mail\WelcomeEmail;
use App\Models\User;
use App\Services\EmailVerificationService;
use App\Services\SendEmailService;
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
        $user = User::where("email", $event->email)->first();
        $url = (new EmailVerificationService)->signedEmailVerificationRoute($user);

        (new SendEmailService)->sendEmailAsJob(new WelcomeEmail($user, $url));
    }
}
