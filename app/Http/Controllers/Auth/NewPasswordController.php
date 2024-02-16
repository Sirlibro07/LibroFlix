<?php

namespace App\Http\Controllers\Auth;

use App\Events\PasswordChangeRequested;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules;
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

            if ($user->password_reset_token == $hash) {
                return $this->renderAuthView(
                    'ResetPassword',
                    [
                        'email' => $user->email,
                        'token' => $hash,
                    ]
                );
            }

            return redirect(RouteServiceProvider::HOME);
        } catch (ModelNotFoundException $e) {
            abort(404);
        }
    }

    /**
     * Handle an incoming new password request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $request->validate([
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $email = $request->get("email");
        $password = $request->get('password');

        event(new PasswordChangeRequested($email, $password));

        return redirect()->route('login')->with('status', "password updated");
    }
}
