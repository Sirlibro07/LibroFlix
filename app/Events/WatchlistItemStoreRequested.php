<?php

namespace App\Events;

use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class WatchlistItemStoreRequested
{
    use Dispatchable, InteractsWithSockets, SerializesModels;


    public int $movie_id;

    /**
     * Create a new event instance.
     */
    public function __construct($movie_id)
    {
        $this->movie_id = $movie_id;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, \Illuminate\Broadcasting\Channel>
     */
    public function broadcastOn(): array
    {
        return [
            new PrivateChannel('channel-name'),
        ];
    }
}
