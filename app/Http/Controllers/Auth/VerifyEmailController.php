<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class VerifyEmailController extends Controller
{
    /**
     * Mark the authenticated user's email address as verified.
     */
    public function __invoke($id, $hash)
    {
        try {
            $user = User::findOrFail($id);

            if (!$user->hasVerifiedEmail() && $user->email_verification_token == $hash) {
                $user->markEmailAsVerified();
                $user->email_verification_token = null;
                $user->save();
            }

            return redirect()->intended(RouteServiceProvider::HOME);
        } catch (ModelNotFoundException $e) {
            abort(404);
        }
    }
}
