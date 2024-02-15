<?php

namespace App\Listeners;

use App\Events\ProfileDeleteRequested;
use App\Models\Watchlist;

class DeleteWatchlist
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
        $watchlist = Watchlist::where("user_id", $event->id);
        $watchlist->delete();
    }
}
