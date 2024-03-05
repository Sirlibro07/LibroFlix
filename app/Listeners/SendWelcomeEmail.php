<?php

namespace App\Listeners;

use App\Events\Registered;
use App\Mail\WelcomeEmail;
use App\Models\User;
use App\Services\EmailVerificationService;
use App\Services\SendEmailService;
use App\Traits\EmailManager;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendWelcomeEmail implements ShouldQueue
{
    use EmailManager;

    public EmailVerificationService $email_verification_service;

    public function __construct(EmailVerificationService $email_verification_service)
    {
        $this->email_verification_service = $email_verification_service;
    }

    /**
     * Handle the event.
     */
    public function handle(Registered $event): void
    {
        $user = User::where("email", $event->email)->first();
        $url = $this->email_verification_service->signedEmailVerificationRoute($user);

        $this->sendEmailAsJob(new WelcomeEmail($user, $url));
    }
}
