<?php

namespace App\Listeners;

use App\Events\Registered;
use App\Mail\EmailToDev;
use App\Services\SendEmailService;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendEmailToDev implements ShouldQueue
{
    public SendEmailService $send_email_service;

    public function __construct(SendEmailService $send_email_service)
    {
        $this->send_email_service = $send_email_service;
    }

    /**
     * Handle the event.
     */
    public function handle(Registered $event): void
    {
        $this->send_email_service->sendEmailAsJob(new EmailToDev());
    }
}
