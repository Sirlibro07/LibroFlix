<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Services\AuthenticatedSessionService;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\RedirectResponse;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    private AuthenticatedSessionService $authenticated_session_service;

    public function __construct(AuthenticatedSessionService $authenticated_session_service)
    {
        $this->authenticated_session_service = $authenticated_session_service;
    }

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
    public function store(LoginRequest $request): RedirectResponse
    {
        try {
            $this->authenticated_session_service->store($request->validated(), $request->input('remember'));
            return redirect()->route('home');
        } catch (AuthenticationException $e) {
            return redirect()->back()->withErrors(['email' => 'Credentials not valid']);
        }
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(): RedirectResponse
    {
        $this->authenticated_session_service->destroy();
        return redirect()->route('home');
    }
}
