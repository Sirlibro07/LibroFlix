<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Mail\PasswordResetEmail;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;

class PasswordResetEmailController extends Controller
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
    public function store(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
        ]);

        $user = User::where("email", $request->get("email"))->first();
        $user->password_reset_token =  base64_encode(Str::random(60));
        $user->save();

        $url = SignedRoute('password.reset', 5, $user, $user->password_reset_token);

        Mail::send(new PasswordResetEmail($user, $url));

        return back()->with("status", "password reset email sent");
    }
}
