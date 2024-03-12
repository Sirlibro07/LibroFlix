<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Services\EmailVerificationService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;

class EmailVerificationNotificationController extends Controller
{
    private EmailVerificationService $email_verification_service;

    public function __construct(EmailVerificationService $email_verification_service)
    {
        $this->email_verification_service = $email_verification_service;
    }
    public function store(): RedirectResponse
    {
        $this->email_verification_service->sendEmailVerificationNotification(Auth::user()->email);

        return back()->with("status", $this->email_verification_service->getEmailSentMessage('email verification'));
    }
}
