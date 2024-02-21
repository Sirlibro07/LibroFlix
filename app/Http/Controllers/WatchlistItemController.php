<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use App\Services\WatchlistItemService;
use Illuminate\Http\RedirectResponse;
use Inertia\Response;

class WatchlistItemController extends Controller
{

    private WatchlistItemService $watchlist_item_service;

    public function __construct(WatchlistItemService $watchlist_item_service)
    {
        $this->watchlist_item_service = $watchlist_item_service;
    }

    public function index(): Response
    {

        return $this->renderAppView('Watchlist', ['watchlist_items' => $this->watchlist_item_service->getWatchlistItems()]);
    }

    public function store(Movie $movie): RedirectResponse
    {
        $this->watchlist_item_service->store($movie);

        return back();
    }

    public function destroy(Movie $movie): RedirectResponse
    {
        $this->watchlist_item_service->destroy($movie);

        return back();
    }
}
