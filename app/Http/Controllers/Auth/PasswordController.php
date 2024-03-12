<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\PasswordUpdateRequest;
use App\Services\PasswordService;
use Illuminate\Http\RedirectResponse;

class PasswordController extends Controller
{
    private PasswordService $password_service;
    public function __construct(PasswordService $password_service)
    {
        $this->password_service = $password_service;
    }

    public function update(PasswordUpdateRequest $request): RedirectResponse
    {
       $this->password_service->update($request->input("password"));

        return back()->with("status", "Password updated");
    }
}
