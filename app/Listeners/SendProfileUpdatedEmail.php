<?php

namespace App\Listeners;

use App\Events\ProfileUpdated;
use App\Mail\ProfileUpdatedMail;
use App\Services\SendEmailService;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendProfileUpdatedEmail implements ShouldQueue
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
    public function handle(ProfileUpdated $event): void
    {
        (new SendEmailService)->sendEmailAsJob(new ProfileUpdatedMail($event->email));
    }
}
