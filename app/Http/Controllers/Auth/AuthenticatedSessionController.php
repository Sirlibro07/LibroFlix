<?php

namespace App\Http\Controllers\Auth;

use App\Events\LoginRequested;
use App\Events\LogoutRequested;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Providers\RouteServiceProvider;
use App\Services\AuthenticatedSessionService;
use Illuminate\Auth\AuthenticationException;
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
    public function store(LoginRequest $request, AuthenticatedSessionService $authenticatedSessionService)
    {
        try {
            $authenticatedSessionService->store($request->validated(), $request->input("remember"));
            return redirect(RouteServiceProvider::HOME);
        } catch (AuthenticationException $e) {
            return redirect()->back()->withErrors(['email' => 'Credentials not valid']);
        }
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(AuthenticatedSessionService $authenticatedSessionService)
    {
        $authenticatedSessionService->destroy();
    }
}
