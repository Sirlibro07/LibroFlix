<?php

namespace App\Services;

use App\Mail\PasswordResetEmail;
use App\Models\User;
use App\Traits\SignedRouteManager;
use App\Traits\TokenManager;
use App\Traits\EmailManager;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Session;

class PasswordResetService
{
    use TokenManager, SignedRouteManager, EmailManager;

    public function sendPasswordResetEmail(string $email, string $body): void
    {
        $user = User::where('email', $email)->firstOrFail();
        $this->generateAndStorePasswordResetToken($user);
        $signed_route = $this->signedPasswordResetRoute($user);
        $this->sendEmail(new PasswordResetEmail($user->email, $signed_route, $body));
    }

    public function resetPassword(User $user, string $password): void
    {
        $user->update([
           'password' => Hash::make($password),
           'password_reset_token' => null
        ]);
    }

    public function generateAndStorePasswordResetToken(User $user): void
    {
        $user->update([
            'password_reset_token' => $this->getToken()
        ]);
    }

    public function signedPasswordResetRoute(User $user): string
    {
        return $this->getAuthSignedRoute('password_reset.create', now()->addHour(), $user->email, $user->password_reset_token);
    }

    public function isTokenValid(string $user_password_reset_token = null, string $token): bool
    {
        return $user_password_reset_token == $token && !Session::get('errors')?->first('token');
    }
}
