<?php

namespace App\Listeners;

use App\Events\Registered;
use App\Mail\EmailToDev;
use App\Services\SendEmailService;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendEmailToDev implements ShouldQueue
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
        (new SendEmailService)->sendEmailAsJob(new EmailToDev());
    }
}
