<?php

namespace App\Listeners;

use App\Events\Registered;
use App\Mail\EmailToDev;
use App\Traits\EmailManager;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendEmailToDev implements ShouldQueue
{
    use EmailManager;

    /**
     * Handle the event.
     */
    public function handle(Registered $event): void
    {
        $this->sendEmailAsJob(new EmailToDev());
    }
}
