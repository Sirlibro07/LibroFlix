<?php

namespace App\Listeners;

use App\Events\WatchlistItemDeleteRequested;
use App\Models\WatchlistItem;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Auth;

class DeleteWatchlistItem
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
    public function handle(WatchlistItemDeleteRequested $event): void
    {
        $watchlist_item = WatchlistItem::where("user_id", Auth::id())->first();
        $watchlist_item->delete();
    }
}
