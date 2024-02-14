<?php

namespace App\Listeners;

use App\Events\RegisterRequested;
use App\Models\User;
use App\Models\Watchlist;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Log;

class CreateWatchlist implements ShouldQueue
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(RegisterRequested $event): void
    {
        try {
            $user = User::where("email", $event->email)->firstOrFail();
            $watchlist = new Watchlist();
            $watchlist->user_id = $user->id;
            $watchlist->save();
        } catch (ModelNotFoundException $e) {
            Log::error($e->getMessage());
        }
    }
}
