<?php

namespace App\Http\Controllers;

use App\Http\Resources\WatchlistResource;
use App\Models\Watchlist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class WatchlistController extends Controller
{
    public function index()
    {
        return $this->renderAppView("Watchlist", ["watchlist" => WatchlistResource::make(Watchlist::where("user_id", Auth::id())->first())]);
        // return WatchlistResource::make(Watchlist::where("user_id", Auth::id())->first());
    }
}
