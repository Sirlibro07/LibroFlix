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

    public function scopeGetByTokens(Builder $query, array $tokens): Builder
    {
        return $query->where(function (Builder $query) use ($tokens) {
            foreach ($tokens as $token) {
                $query->orWhere('title', 'like', $token . '%');
            }
        });
    }
}
