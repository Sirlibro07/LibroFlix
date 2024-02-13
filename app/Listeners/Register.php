<?php

namespace App\Listeners;

use App\Events\RegisterRequested;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class Register
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(RegisterRequested $event): void
    {
        Log::info("register lisetener reached");
        $request = $event->request;

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'email_verification_token' => base64_encode(Str::random(60)),

        ]);

        Auth::login($user);
    }
}