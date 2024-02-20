<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Services\EmailVerificationService;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\RedirectResponse;

class VerifyEmailController extends Controller
{
    /**
     * Mark the authenticated user's email address as verified.
     */
    public function __invoke($email, $token, EmailVerificationService $emailVerificationService): RedirectResponse
    {
        try {
            $emailVerificationService->verifyEmail($email, $token);

            return redirect()->route("profile.edit")->with("status", "Email has been verified");
        } catch (ModelNotFoundException $e) {
            abort(404);
        }

        // TODO make this into an event
    }
}
