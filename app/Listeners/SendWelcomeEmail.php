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
    public SendEmailService $send_email_service;
    public EmailVerificationService $email_verification_service;

    public function __construct(SendEmailService $send_email_service, EmailVerificationService $email_verification_service)
    {
        $this->send_email_service = $send_email_service;
        $this->email_verification_service = $email_verification_service;
    }

    /**
     * Handle the event.
     */
    public function handle(Registered $event): void
    {
        Log::info("reached send welcome email");
        $user = User::where("email", $event->email)->first();
        $url = $this->email_verification_service->signedEmailVerificationRoute($user);

        $this->send_email_service->sendEmailAsJob(new WelcomeEmail($user, $url));
    }
}
