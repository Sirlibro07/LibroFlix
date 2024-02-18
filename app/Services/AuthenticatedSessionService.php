<?php

namespace App\Services;

use Illuminate\Auth\AuthenticationException;
use Illuminate\Support\Facades\Auth;

class AuthenticatedSessionService
{
    public function store(array $data, $remember_bool)
    {
        if (!Auth::attempt($data, (bool) $remember_bool)) {
            throw new AuthenticationException();
        }

        session()->regenerate();
    }

    public function destroy()
    {
        $user = Auth::user();
        $user->remember_token = null;
        $user->save();

        Auth::logout();
        session()->invalidate();
        session()->regenerateToken();
    }
}
