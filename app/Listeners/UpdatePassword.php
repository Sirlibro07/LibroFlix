<?php

namespace App\Listeners;

use App\Events\PasswordUpdateRequested;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

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
        $user = User::where("email", $event->email)->first();
        $user->update([
            'password' => Hash::make($event->validated_password),
        ]);
    }
}
