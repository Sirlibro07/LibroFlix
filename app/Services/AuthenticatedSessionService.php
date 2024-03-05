<?php

namespace App\Services;

use Illuminate\Auth\AuthenticationException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class AuthenticatedSessionService
{
    public function store(array $credentials, bool $remember_me): void
    {
        if (!Auth::attempt($credentials, $remember_me)) {
            throw new AuthenticationException();
        }

        session()->regenerate();
    }

    public function destroy(): void
    {
        Auth::logout();
        session()->invalidate();
        session()->regenerateToken();
    }
}
