<?php

namespace App\Services;

use Illuminate\Support\Str;

class TokenService
{
    public function generateToken(): string
    {
        return base64_encode(Str::random(60));
    }
}
