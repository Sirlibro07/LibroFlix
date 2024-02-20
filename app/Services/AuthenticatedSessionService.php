<?php

namespace App\Services;

use Illuminate\Auth\AuthenticationException;
use Illuminate\Support\Facades\Auth;

class AuthenticatedSessionService
{
    public function store(array $data, $rememberBool): void
    {
        if (!Auth::attempt($data, (bool) $rememberBool)) {
            throw new AuthenticationException();
        }

        session()->regenerate();
    }

    public function destroy(): void
    {
        $user = Auth::user();
        $user->remember_token = null;
        $user->save();

        Auth::logout();
        session()->invalidate();
        session()->regenerateToken();
    }
}
