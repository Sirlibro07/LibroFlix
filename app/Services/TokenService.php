<?php

namespace App\Services;

use Illuminate\Support\Str;

class TokenService
{
    public function generateToken(): string
    {
        return base64_encode(Str::random(60));
    }

    public function isUserPasswordResetTokenValid(string $user_password_reset_token, string $token): bool
    {
        return $user_password_reset_token == $token;
    }
}
