<?php

namespace App\Listeners;

use App\Events\ProfileUpdated;
use App\Mail\ProfileUpdatedMail;
use App\Services\SendEmailService;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendProfileUpdatedEmail implements ShouldQueue
{
    public SendEmailService $send_email_service;

    public function __construct(SendEmailService $send_email_service)
    {
        $this->send_email_service = $send_email_service;
    }

    /**
     * Handle the event.
     */
    public function handle(ProfileUpdated $event): void
    {
        $this->send_email_service->sendEmailAsJob(new ProfileUpdatedMail($event->email));
    }
}
