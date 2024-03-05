<?php

namespace App\Services;

use App\Mail\PasswordResetEmail;
use App\Models\User;
use App\Traits\SignedRouteManager;
use App\Traits\TokenManager;
use App\Traits\EmailManager;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;

class PasswordResetService
{
    use TokenManager, SignedRouteManager, EmailManager;

    public function sendEmail(string $email): void
    {
        $user = User::where('email', $email)->firstOrFail();
        $this->generateAndStorePasswordResetToken($user);
        $signed_route = $this->signedPasswordResetRoute($user);
        $this->sendEmailAsJob(new PasswordResetEmail($user, $signed_route));
    }

    public function resetPassword(User $user, string $password): void
    {
        $user->password = Hash::make($password);
        $user->password_reset_token = null;
        $user->save();
    }

    public function generateAndStorePasswordResetToken(User $user): void
    {
        $user->password_reset_token =  $this->getToken();
        $user->save();
    }

    public function signedPasswordResetRoute(User $user): string
    {
        return $this->getSignedRouteManager('password.reset', now()->addHour(), $user->email, $user->password_reset_token);
    }

    public function isTokenValid(string $user_password_reset_token = null, string $token): bool
    {
        return $user_password_reset_token == $token && !Session::get('errors')?->first('token');
    }
}
