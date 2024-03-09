<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterRequest;
use App\Services\UserService;
use Illuminate\Http\RedirectResponse;
use Inertia\Response;

class RegisterUserController extends Controller
{
    private UserService $user_service;

    public function __construct(UserService $user_service)
    {
        $this->user_service = $user_service;
    }

    public function create(): Response
    {
        return $this->renderAuthView("Register");
    }

    public function store(RegisterRequest $request): RedirectResponse
    {
        $this->user_service->store($request->validated());

        return redirect()->route("home");
    }
}
