<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\NewPasswordRequest;
use App\Models\User;
use App\Services\PasswordResetService;
use Illuminate\Http\RedirectResponse;
use Inertia\Response;

class NewPasswordController extends Controller
{
    private PasswordResetService $password_reset_service;

    public function __construct(PasswordResetService $password_reset_service)
    {
        $this->password_reset_service = $password_reset_service;
    }

    /**
     * Display the password reset view.
     */
    public function create(User $user, $token): Response
    {

        return $this->renderAuthView(
            'ResetPassword',
            [
                'email' => $user->email,
                'is_token_valid' => $this->password_reset_service->isTokenValid($user->password_reset_token, $token),
                'token' => $token,
            ]
        );
    }

    /**
     * Handle an incoming new password request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(NewPasswordRequest $request): RedirectResponse
    {
        $user = User::where('email', $request->input('email'))->first();

        if ($user->password_reset_token == $request->input('token')) {
            $this->password_reset_service->resetPassword($user, $request->input('password'));
            return redirect()->route('login')->with('status', 'password updated');
        }

        return redirect()->back()->withErrors('token', 'the token is not valid anymore');
    }
}
