<?php

namespace App\Services;

use App\Mail\EmailVerificationNotification;
use App\Models\User;
use App\Traits\SignedRouteManager;
use App\Traits\EmailManager;
use Illuminate\Support\Facades\Auth;

class EmailVerificationService
{
    use SignedRouteManager, EmailManager;

    public function sendEmailVerificationNotification(string $email): void
    {
        $user = User::where('email', $email)->firstOrFail();
        if (!$user->hasVerifiedEmail()) {
            $signed_route = $this->signedEmailVerificationRoute($user);
            $this->sendEmail(new EmailVerificationNotification($user, $signed_route));
        }
    }

    public function verifyEmail(User $user, string $token): void
    {
        if (!$user->hasVerifiedEmail() && $user->email_verification_token == $token) {
            $user->markEmailAsVerified();
            $user->update([
                'email_verification_token' => null
            ]);
        }

        Auth::login($user);
    }

    public function signedEmailVerificationRoute(User $user): string
    {
        return $this->getAuthSignedRoute('verification.verify', now()->addHour(), $user->email, $user->email_verification_token);
    }
}
