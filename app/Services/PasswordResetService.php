<?php

namespace App\Services;

use App\Mail\PasswordResetEmail;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class PasswordResetService extends SendEmailService
{
    public function sendEmail(string $email)
    {
        $user = User::where("email", $email)->first();
        if ($user) {
            $this->generateAndStorePasswordResetToken($user);
            $signed_route = $this->signedPasswordResetRoute($user);
            $this->sendEmailAsJob(new PasswordResetEmail($user, $signed_route));
        }
    }

    public function resetPassword(string $email, string $password)
    {
        $user = User::where("email", $email)->first();
        $user->password = Hash::make($password);
        $user->password_reset_token = null;
        $user->save();
    }

    public function generateAndStorePasswordResetToken(User $user)
    {
        $user->password_reset_token =  (new TokenService)->generateToken();
        $user->save();
    }

    public function signedPasswordResetRoute(User $user)
    {
        return (new SignedRouteService)->SignedRoute('password.reset', 5, $user->email, $user->password_reset_token);
    }
}
