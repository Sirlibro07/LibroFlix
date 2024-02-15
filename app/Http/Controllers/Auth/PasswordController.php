<?php

namespace App\Http\Controllers\Auth;

use App\Events\PasswordUpdateRequested;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Password;

class PasswordController extends Controller
{
    /**
     * Update the user's password.
     */
    public function update(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'current_password' => ['required', 'current_password'],
            'password' => ['required', Password::defaults(), 'confirmed'],
        ]);


        PasswordUpdateRequested::dispatch($request->user()->email, $validated['password']);

        return back()->with("status", "Password updated");
    }
}
