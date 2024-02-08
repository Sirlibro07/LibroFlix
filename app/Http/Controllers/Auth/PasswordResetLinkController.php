<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Password;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class PasswordResetLinkController extends Controller
{
    /**
     * Display the password reset link request view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/ForgotPassword', [
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming password reset link request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'email' => 'required|email|exists:users,email',
        ], ['email.exists' => 'Invalid email',]);




        try {
            $status = Password::sendResetLink(
                $request->only('email')
            );

            if ($status == Password::RESET_THROTTLED) {
                return back()->withErrors(['email' => trans($status)]);
            }

            if ($status == Password::RESET_LINK_SENT) {
                return back()->with('status', trans($status));
            }
        } catch (Exception $e) {
            return back()->withErrors(['email' => "Something went wrong, please try again in a few minutes"]);
        }
    }
}
