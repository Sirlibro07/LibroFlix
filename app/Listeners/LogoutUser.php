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
        Auth::logout();
        session()->invalidate();
        session()->regenerateToken();
    }
}
