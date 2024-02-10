<?php

namespace App\Listeners;

use App\Events\UserRegistered;
use App\Mail\EmailToDev;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

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
    public function handle(UserRegistered $event): void
    {
        sendEmail(new EmailToDev());
    }
}
