<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Auth;

class VerifyEmailController extends Controller
{
    /**
     * Mark the authenticated user's email address as verified.
     */
    public function __invoke($email, $hash)
    {
        try {
            $user = User::where("email", $email)->firstOrFail();

            if (!$user->hasVerifiedEmail() && $user->email_verification_token == $hash) {
                $user->markEmailAsVerified();
                $user->email_verification_token = null;
                $user->save();
            }

            Auth::login($user);

            return redirect()->route("profile.edit")->with("status", "Email has been verified");
        } catch (ModelNotFoundException $e) {
            abort(404);
        }

        // TODO make this into an event
    }
}
