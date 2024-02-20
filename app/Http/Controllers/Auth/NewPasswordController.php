<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\NewPasswordRequest;
use App\Models\User;
use App\Services\PasswordResetService;
use App\Services\TokenService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Session;
use Inertia\Response;

class NewPasswordController extends Controller
{

    public TokenService $token_service;
    public PasswordResetService $password_reset_service;

    public function __construct(TokenService $token_service, PasswordResetService $password_reset_service)
    {
        $this->token_service = $token_service;
        $this->password_reset_service = $password_reset_service;
    }

    /**
     * Display the password reset view.
     */
    public function create(User $user, $token): Response
    {
        $is_token_valid = $this->token_service->isUserPasswordResetTokenValid($user->password_reset_token, $token) && !Session::get('errors')?->first('token');

        return $this->renderAuthView(
            'ResetPassword',
            [
                'email' => $user->email,
                'is_token_valid' => $is_token_valid,
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
            $this->password_reset_service->resetPassword($request->input('email'), $request->input('password'));
            return redirect()->route('login')->with('status', 'password updated');
        }

        return redirect()->back()->withErrors('token', 'the token is not valid anymore');
    }
}
