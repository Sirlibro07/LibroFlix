<?php

namespace App\Listeners;

use App\Events\ProfileDeleteRequested;
use App\Models\User;

class DeleteProfile
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
    public function handle(ProfileDeleteRequested $event): void
    {
        $user = User::find($event->id);
        $user->delete();
    }
}
