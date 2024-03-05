<?php

namespace App\Services;

use App\Mail\VerificationEmail;
use App\Models\User;
use App\Traits\AuthSignedRoute;
use Illuminate\Support\Facades\Auth;

class EmailVerificationService extends SendEmailService
{
    use AuthSignedRoute;

    public function sendEmail(string $email): void
    {
        $user = User::where('email', $email)->first();
        if (!$user->hasVerifiedEmail()) {
            $signed_route = $this->signedEmailVerificationRoute($user);
            $this->sendEmailAsJob(new VerificationEmail($user, $signed_route));
        }
    }

    public function verifyEmail(string $email, string $token): void
    {
        $user = User::where('email', $email)->firstOrFail();

        if (!$user->hasVerifiedEmail() && $user->email_verification_token == $token) {
            $user->markEmailAsVerified();
            $user->email_verification_token = null;
            $user->save();
        }

        Auth::login($user);
    }

    public function signedEmailVerificationRoute(User $user): string
    {
        return $this->getAuthSignedRoute('verification.verify', now()->addHour(), $user->email, $user->email_verification_token);
    }
}
