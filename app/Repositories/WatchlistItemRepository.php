<?php

namespace App\Repositories;

use App\Http\Resources\MovieResource;
use App\Interfaces\Repositories\WatchlistItemRepositoryInterface;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\Auth;

class WatchlistItemRepository implements WatchlistItemRepositoryInterface
{

    public function getWatchlistItems(): AnonymousResourceCollection
    {
        return MovieResource::collection(Auth::user()->movies);
    }
}
