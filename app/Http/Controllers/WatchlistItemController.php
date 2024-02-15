<?php

namespace App\Http\Controllers;

use App\Models\Watchlist;
use App\Models\WatchlistItem;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class WatchlistItemController extends Controller
{
    public function store(int $id): RedirectResponse
    {
        $watchlist = (Watchlist::where("user_id", Auth::id())->first());

        $watchlist_item = new WatchlistItem();
        $watchlist_item->watchlist_id = $watchlist->id;
        $watchlist_item->movie_id = $id;

        $watchlist_item->save();

        return back();
    }

    public function destroy(): RedirectResponse
    {
        $watchlist = Watchlist::where("user_id", Auth::id())->first();
        $watchlist_item = WatchlistItem::where("watchlist_id", $watchlist->id)->first();
        $watchlist_item->delete();

        return back();
    }
}
