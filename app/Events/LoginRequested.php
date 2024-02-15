<?php

namespace App\Events;

use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class LoginRequested
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public string $email;
    public string $password;
    public string $remember;
    /**
     * Create a new event instance.
     */
    public function __construct($email, $password, $remember)
    {
        $this->email = $email;
        $this->password = $password;
        $this->remember = $remember;
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
