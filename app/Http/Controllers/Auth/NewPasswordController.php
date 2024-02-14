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
    public function create($id, $hash): Response
    {

        try {
            $user = User::findOrFail($id);

            if ($user->password_reset_token == $hash) {
                return $this->renderAuthView(
                    'ResetPassword',
                    [
                        'id' => $user->id,
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

        $id = $request->get("id");
        $password = $request->get('password');
        PasswordChangeRequested::dispatch($id, $password);

        return redirect()->route('login')->with('status', "password updated");
    }
}
