<?php

namespace App\Interfaces\Repositories;

use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

interface WatchlistItemRepositoryInterface
{
    public function getWatchlistItems(): AnonymousResourceCollection;
}
