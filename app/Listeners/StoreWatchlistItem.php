<?php

namespace App\Listeners;

use App\Events\WatchlistItemStoreRequested;
use App\Models\WatchlistItem;
use Illuminate\Support\Facades\Auth;

class StoreWatchlistItem
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
    public function handle(WatchlistItemStoreRequested $event): void
    {
        $watchlist_item = new WatchlistItem();
        $watchlist_item->user_id = Auth::id();
        $watchlist_item->movie_id = $event->movie_id;

        $watchlist_item->save();
    }
}
