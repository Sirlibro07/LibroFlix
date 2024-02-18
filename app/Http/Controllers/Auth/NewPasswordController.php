<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\NewPasswordRequest;
use App\Models\User;
use App\Services\PasswordResetService;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Session;
use Inertia\Response;

class NewPasswordController extends Controller
{
    /**
     * Display the password reset view.
     */
    public function create($email, $hash): Response
    {

        try {
            $user = User::where("email", $email)->firstOrFail();

            $session_errors = null;
            if (Session::has('errors')) {
                $session_errors = Session::get('errors')->first('token');
            }
            return $this->renderAuthView(
                'ResetPassword',
                [
                    'email' => $user->email,
                    'isTokenValid' => $user->password_reset_token == $hash && !$session_errors,
                    'token' => $hash,
                ]
            );
        } catch (ModelNotFoundException $e) {
            abort(404);
        }
    }

    /**
     * Handle an incoming new password request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(NewPasswordRequest $request,  PasswordResetService $passwordResetService): RedirectResponse
    {
        $user = User::where("email", $request->input("email"))->first();

        if ($user->password_reset_token == $request->input("token")) {
            $passwordResetService->resetPassword($request->input("email"), $request->input("password"));
            return redirect()->route('login')->with('status', "password updated");
        }

        return redirect()->back()->withErrors("token", "the token is not valid anymore");
    }
}
