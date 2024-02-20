<?php

namespace App\Services;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class PasswordService
{
    public function update($password): void
    {
        $user = Auth::user();
        $user->update([
            'password' => Hash::make($password),
        ]);
    }
}
