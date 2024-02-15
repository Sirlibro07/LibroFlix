<?php

namespace App\Listeners;

use Illuminate\Support\Facades\Auth;

class LogoutUser
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
    public function handle(): void
    {
        $user = Auth::user();
        $user->remember_token = null;
        $user->save();

        Auth::logout();
        session()->invalidate();
        session()->regenerateToken();
    }
}
