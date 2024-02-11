<?php

namespace App\Http\Controllers\Auth;

use App\Events\PasswordResetEmailRequested;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PasswordResetEmailController extends Controller
{
    /**
     * Display the password reset email request view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/ForgotPassword', [
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming password reset email request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
        ]);

        $user = User::where("email", $request->get("email"))->first();

        PasswordResetEmailRequested::dispatch($user);

        return back()->with("status", "password reset email sent, it could take some seconds for the email to arrive.");
    }
}
