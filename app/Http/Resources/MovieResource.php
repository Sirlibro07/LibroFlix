<?php

namespace App\Http\Resources;

use App\Models\Movie;
use App\Services\WatchlistItemService;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MovieResource extends JsonResource
{

    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'slug' => $this->slug,
            'description' => $this->description,
            'rating' => $this->rating,
            'year' => $this->year,
            'watchlisted' => (new WatchlistItemService)->isWatchlisted(Movie::find($this->id)), // DI in constructor doesn't work in api resources afaik
        ];
    }
}
