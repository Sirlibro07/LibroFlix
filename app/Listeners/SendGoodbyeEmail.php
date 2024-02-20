<?php

namespace App\Listeners;

use App\Events\ProfileDeleted;
use App\Mail\GoodbyeEmail;
use App\Services\SendEmailService;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendGoodbyeEmail implements ShouldQueue
{
    public SendEmailService $send_email_service;

    public function __construct(SendEmailService $send_email_service)
    {
        $this->send_email_service = $send_email_service;
    }

    /**
     * Handle the event.
     */
    public function handle(ProfileDeleted $event): void
    {
        $this->send_email_service->sendEmailAsJob(new GoodbyeEmail($event->email));
    }
}
