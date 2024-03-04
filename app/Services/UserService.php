<?php

namespace App\Services;

use App\Models\User;
use App\Services\TokenService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserService
{
    private TokenService $token_service;

    public function __construct(TokenService $token_service)
    {
        $this->token_service = $token_service;
    }

    public function store(array $data): void
    {
        $user = User::factory()->create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);

        Auth::login($user);
    }


    public function update(array $data): void
    {
        $user = Auth::user();

        $user->fill($data);

        if ($user->isDirty('email')) {
            $user->email_verified_at = null;
            $user->email_verification_token = $this->token_service->generateToken();
        }

        $user->save();
    }

    public function destroy(): void
    {
        $user = User::find(Auth::id());
        $user->delete();
    }
}
