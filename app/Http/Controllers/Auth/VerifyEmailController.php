<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Services\EmailVerificationService;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\RedirectResponse;

class VerifyEmailController extends Controller
{
    private EmailVerificationService $email_verification_service;
    public function __construct(EmailVerificationService $email_verification_service)
    {
        $this->email_verification_service = $email_verification_service;
    }

    public function __invoke(User $user, $token): RedirectResponse
    {
        $this->email_verification_service->verifyEmail($user, $token);

        return redirect()->route("profile.edit")->with("status", "Email has been verified");
    }
}
