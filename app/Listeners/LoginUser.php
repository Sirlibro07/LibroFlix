<?php

namespace App\Listeners;

use App\Events\LoginRequested;

class LoginUser
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
    public function handle(LoginRequested $event): void
    {
        $request = $event->request;

        $request->authenticate();
        $request->session()->regenerate();
    }
}
