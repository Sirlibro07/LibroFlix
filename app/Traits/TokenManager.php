<?php

namespace App\Traits;


use Illuminate\Support\Str;

trait TokenManager
{
    public function getToken()
    {
        return base64_encode(Str::random(60));
    }
}
