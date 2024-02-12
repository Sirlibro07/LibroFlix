<?php

namespace App\Listeners;

use App\Events\ProfileDeleted;
use App\Mail\GoodbyeEmail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Log;

class SendGoodbyeEmail implements ShouldQueue
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
    public function handle(ProfileDeleted $event): void
    {
        Log::info("tried to send goodbye email");

        sendEmail(new GoodbyeEmail($event->email));
    }
}
