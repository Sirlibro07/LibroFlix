<?php

namespace App\Listeners;

use App\Events\ProfileDeleted;
use App\Mail\GoodbyeEmail;
use App\Services\SendEmailService;
use App\Traits\EmailManager;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendGoodbyeEmail implements ShouldQueue
{
    use EmailManager;

    /**
     * Handle the event.
     */
    public function handle(ProfileDeleted $event): void
    {
        $this->sendEmail(new GoodbyeEmail($event->email));
    }
}
