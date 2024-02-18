<?php

namespace App\Services;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class PasswordService
{
    public function update($password)
    {
        Log::info("sup");
        $user = Auth::user();
        $user->update([
            'password' => Hash::make($password),
        ]);
    }
}
