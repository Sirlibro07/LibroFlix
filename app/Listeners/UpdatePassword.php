<?php

namespace App\Listeners;

use App\Events\PasswordUpdateRequested;
use Illuminate\Support\Facades\Hash;

class UpdatePassword
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
    public function handle(PasswordUpdateRequested $event): void
    {
        $user = $event->user;
        $user->update([
            'password' => Hash::make($event->validated_password),
        ]);
    }
}
