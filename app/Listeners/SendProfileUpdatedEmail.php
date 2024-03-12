<?php

namespace App\Listeners;

use App\Events\ProfileUpdated;
use App\Mail\ProfileUpdatedMail;
use App\Services\SendEmailService;
use App\Traits\EmailManager;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendProfileUpdatedEmail implements ShouldQueue
{
    use EmailManager;

    /**
     * Handle the event.
     */
    public function handle(ProfileUpdated $event): void
    {
        $this->sendGenericEmail(new ProfileUpdatedMail($event->email));
    }
}
