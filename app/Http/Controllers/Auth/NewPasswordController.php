<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
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
                return Inertia::render('Auth/ResetPassword', [
                    'id' => $user->id,
                    'token' => $hash,
                ]);
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

        $user = User::find($request->get("id"));
        $user->password = Hash::make($request->get('password'));
        $user->password_reset_token = null;
        $user->save();

        return redirect()->route('login')->with('status', "password updated");
    }
}
