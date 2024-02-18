<?php

namespace App\Services;

use App\Models\User;
use App\Services\TokenService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserService
{
    public function store(array $data)
    {
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'email_verification_token' => (new TokenService)->generateToken(),

        ]);

        Auth::login($user);
    }


    public function update(array $data)
    {
        $user = Auth::user();

        $user->fill($data);

        if ($user->isDirty('email')) {
            $user->email_verified_at = null;
            $user->email_verification_token = (new TokenService)->generateToken();
        }

        $user->save();
    }

    public function destroy()
    {
        $user = User::find(Auth::id());
        $user->delete();
    }
}
