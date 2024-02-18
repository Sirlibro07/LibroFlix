<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\PasswordResetEmailRequest;
use App\Services\PasswordResetService;
use Inertia\Response;

class PasswordResetEmailController extends Controller
{
    /**
     * Display the password reset email request view.
     */
    public function create(): Response
    {
        return $this->renderAuthView('ForgotPassword', [
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming password reset email request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(PasswordResetEmailRequest $request, PasswordResetService $passwordResetService)
    {
        $passwordResetService->sendEmail($request->input("email"));

        return back()->with("status", "password reset email sent, it could take some seconds for the email to arrive.");
    }
}
