<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\PasswordResetEmailRequest;
use App\Services\PasswordResetService;
use http\Client\Curl\User;
use Illuminate\Http\RedirectResponse;
use Inertia\Response;

class PasswordResetEmailController extends Controller
{
    private PasswordResetService $password_reset_service;

    public function __construct(PasswordResetService $password_reset_service)
    {
        $this->password_reset_service = $password_reset_service;
    }

    public function create(): Response
    {
        return $this->renderAuthView('ForgotPassword', [
            'status' => session('status'),
        ]);
    }

    public function store(PasswordResetEmailRequest $request): RedirectResponse
    {
        $body = 'Password reset requested, in case it was not you no further action is required,';
        $this->password_reset_service->sendPasswordResetEmail($request->input('email'), $body);

        return back()->with('status', $this->password_reset_service->getEmailSentMessage('password reset email'));
    }
}
