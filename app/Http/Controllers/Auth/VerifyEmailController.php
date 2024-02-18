<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Services\EmailVerificationService;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Auth;

class VerifyEmailController extends Controller
{
    /**
     * Mark the authenticated user's email address as verified.
     */
    public function __invoke($email, $token, EmailVerificationService $emailVerificationService)
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
