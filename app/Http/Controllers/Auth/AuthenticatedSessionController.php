<?php

namespace App\Http\Controllers\Auth;

use App\Events\LoginRequested;
use App\Events\LogoutRequested;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return $this->renderAuthView("Login", ['status' => session('status'),]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request)
    {
        LoginRequested::dispatch($request->input("email"), $request->input("password"), $request->input("remember"));
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(): RedirectResponse
    {
        LogoutRequested::dispatch();

        return redirect(RouteServiceProvider::HOME);
    }
}
