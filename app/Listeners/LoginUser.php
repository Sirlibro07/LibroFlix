<?php

namespace App\Listeners;

use App\Events\LoginRequested;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

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
    public function handle(LoginRequested $event): RedirectResponse
    {
        try {
            if (!Auth::attempt(['email' => $event->email, 'password' => $event->password], (bool) $event->remember)) {
                throw new AuthenticationException();
            }

            session()->regenerate();
            return redirect(RouteServiceProvider::HOME);
        } catch (AuthenticationException $e) {
            return redirect()->back()->withErrors(['email' => 'Credentials not valid']);
        }
    }
}
