<?php

namespace App\Services;

use App\Models\WatchlistItem;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class WatchlistItemService
{
    public function store(int $movie_id)
    {
        Log::info("hello");
        $watchlist_item = new WatchlistItem();
        $watchlist_item->user_id = Auth::id();
        $watchlist_item->movie_id = $movie_id;

        $watchlist_item->save();
    }

    public function destroy(int $movie_id)
    {
        $watchlist_item = WatchlistItem::where("user_id", Auth::id())->where("movie_id", $movie_id)->first();
        $watchlist_item->delete();
    }
}
