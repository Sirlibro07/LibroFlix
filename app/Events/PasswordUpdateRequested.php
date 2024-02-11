<?php

namespace App\Events;

use App\Models\User;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class PasswordUpdateRequested
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public User $user;
    public string $validated_password;
    /**
     * Create a new event instance.
     */
    public function __construct($user, $validated_password)
    {
        $this->user = $user;
        $this->validated_password  = $validated_password;
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
