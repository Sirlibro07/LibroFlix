<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\NewPasswordRequest;
use App\Models\User;
use App\Services\PasswordResetService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Validation\ValidationException;
use Inertia\Response;

class NewPasswordController extends Controller
{
    private PasswordResetService $password_reset_service;

    public function __construct(PasswordResetService $password_reset_service)
    {
        $this->password_reset_service = $password_reset_service;
    }


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
     * @throws ValidationException
     */
    public function store(NewPasswordRequest $request): RedirectResponse
    {
        $user = User::where('email', $request->input('email'))->first();

        if ($user->password_reset_token == $request->input('token')) {
            $this->password_reset_service->resetPassword($user, $request->input('password'));
            return redirect()->route('login.create')->with('status', 'password updated');
        }
        // la mail e' giusta, il token c'e' ma non e' corretto

        return redirect()->back()->withErrors(['token' => 'the token is not valid anymore']);

    }
}
