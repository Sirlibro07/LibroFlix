<?php

namespace App\Listeners;

use App\Events\PasswordChangeRequested;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class ChangePassword
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
    public function handle(PasswordChangeRequested $event): void
    {
        $user = User::where("email", $event->email)->first();
        $user->password = Hash::make($event->password);
        $user->password_reset_token = null;
        $user->save();
    }
}
