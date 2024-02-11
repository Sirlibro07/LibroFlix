<?php

namespace App\Listeners;

use App\Events\Registered;
use App\Mail\EmailToDev;
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
        sendEmail(new EmailToDev());
    }
}
