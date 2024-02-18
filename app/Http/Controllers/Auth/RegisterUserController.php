<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterRequest;
use App\Services\UserService;
use Inertia\Response;

class RegisterUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return $this->renderAuthView("Register");
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(RegisterRequest $request, UserService $userService)
    {
        $userService->store($request->validated());
    }
}
