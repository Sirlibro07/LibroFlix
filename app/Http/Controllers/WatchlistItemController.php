<?php

namespace App\Http\Controllers;

use App\Http\Resources\WatchlistItemResource;
use App\Models\WatchlistItem;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;

class WatchlistItemController extends Controller
{

    public function index()
    {

        $watchlist_items = WatchlistItem::where("user_id", Auth::id())->get();

        return $this->renderAppView("Watchlist", ['watchlist_items' => WatchlistItemResource::collection($watchlist_items)]);
    }

    public function store(int $id): RedirectResponse
    {

        $watchlist_item = new WatchlistItem();
        $watchlist_item->user_id = Auth::id();
        $watchlist_item->movie_id = $id;

        $watchlist_item->save();

        return back();
    }

    public function destroy(): RedirectResponse
    {
        $watchlist_item = WatchlistItem::where("user_id", Auth::id())->first();
        $watchlist_item->delete();

        return back();
    }
}
