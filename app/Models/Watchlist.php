<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Watchlist extends Model
{
    use HasFactory;

    public function watchlist_items()
    {
        return $this->hasMany(WatchlistItem::class);
    }
}
