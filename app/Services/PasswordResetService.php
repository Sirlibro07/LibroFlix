<?php

namespace App\Services;

use App\Mail\PasswordResetEmail;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;

class PasswordResetService extends SendEmailService
{
    // metter services in construct

    public function sendEmail(string $email): void
    {
        $user = User::where("email", $email)->firstOrFail();
        $this->generateAndStorePasswordResetToken($user);
        $signed_route = $this->signedPasswordResetRoute($user);
        $this->sendEmailAsJob(new PasswordResetEmail($user, $signed_route));
    }

    public function resetPassword(string $email, string $password): void
    {
        $user = User::where("email", $email)->first();
        $user->password = Hash::make($password);
        $user->password_reset_token = null;
        $user->save();
    }

    public function generateAndStorePasswordResetToken(User $user): void
    {
        $user->password_reset_token =  (new TokenService)->generateToken();
        $user->save();
    }

    public function signedPasswordResetRoute(User $user): string
    {
        return (new SignedRouteService)->signedRoute('password.reset', now()->addHour(), $user->email, $user->password_reset_token);
    }

    public function isTokenValid(string $user_password_reset_token = null, string $token): bool
    {
        return $user_password_reset_token == $token && !Session::get('errors')?->first('token');
    }
}
