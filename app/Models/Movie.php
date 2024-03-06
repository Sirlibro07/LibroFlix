<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    use HasFactory;

    public function users()
    {
        return $this->belongsToMany(User::class, 'watchlist_items');
    }


    public function scopeSearchByTokens(Builder $query, array $tokens): Builder
    {
        foreach ($tokens as $i => $token) {
            if ($i === 0) {
                $query->where('title', 'like', $token . '%');
                continue;
            }
            $query->orWhere('title', 'like', $token . '%');
        }
        return $query;
    }
}
