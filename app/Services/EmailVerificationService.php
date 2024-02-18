<?php

namespace App\Services;

use App\Mail\VerificationEmail;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class EmailVerificationService extends SendEmailService
{
    public function SendEmail(string $email)
    {
        $user = User::where("email", $email)->first();
        if (!$user->hasVerifiedEmail()) {
            $signed_route = $this->signedEmailVerificationRoute($user);
            $this->sendEmailAsJob(new VerificationEmail($user, $signed_route));
        }
    }

    public function verifyEmail(string $email, string $token)
    {
        $user = User::where("email", $email)->firstOrFail();

        if (!$user->hasVerifiedEmail() && $user->email_verification_token == $token) {
            $user->markEmailAsVerified();
            $user->email_verification_token = null;
            $user->save();
        }

        Auth::login($user);
    }

    public function signedEmailVerificationRoute(User $user)
    {
        return (new SignedRouteService)->SignedRoute("verification.verify", 10, $user->email, $user->email_verification_token);
    }
}
