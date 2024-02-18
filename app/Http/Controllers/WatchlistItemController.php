<?php

namespace App\Http\Controllers;

use App\Http\Resources\WatchlistItemResource;
use App\Models\WatchlistItem;
use App\Services\WatchlistItemService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;

class WatchlistItemController extends Controller
{

    public function index()
    {
        $watchlist_items = WatchlistItem::where("user_id", Auth::id())->get();

        return $this->renderAppView("Watchlist", ['watchlist_items' => WatchlistItemResource::collection($watchlist_items)]);
    }

    public function store(int $id, WatchlistItemService $watchlistItemService): RedirectResponse
    {
        $watchlistItemService->store($id);

        return back();
    }

    public function destroy(int $id, WatchlistItemService $watchlistItemService): RedirectResponse
    {
        $watchlistItemService->destroy($id);

        return back();
    }
}
