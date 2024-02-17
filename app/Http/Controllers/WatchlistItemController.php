<?php

namespace App\Http\Controllers;

use App\Events\WatchlistItemDeleteRequested;
use App\Events\WatchlistItemStoreRequested;
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

        event(new WatchlistItemStoreRequested($id));

        return back();
    }

    public function destroy(): RedirectResponse
    {
        event(new WatchlistItemDeleteRequested);

        return back();
    }
}
