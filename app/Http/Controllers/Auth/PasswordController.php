<?php

namespace App\Http\Controllers\Auth;

use App\Events\PasswordUpdated;
use App\Http\Controllers\Controller;
use App\Http\Requests\PasswordUpdateRequest;
use App\Services\PasswordService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;

class PasswordController extends Controller
{
    /**
     * Update the user's password.
     */
    public function update(PasswordUpdateRequest $request, PasswordService $passwordService): RedirectResponse
    {
        $passwordService->update($request->input("password"));

        event(new PasswordUpdated(Auth::user()->email));

        return back()->with("status", "Password updated");
    }
}
