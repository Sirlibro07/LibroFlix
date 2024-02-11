<?php

namespace App\Listeners;

use App\Events\LogoutRequested;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

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
    public function handle($event): void
    {
        $request = $event->request;

        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
    }
}
