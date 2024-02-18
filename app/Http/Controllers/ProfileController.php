<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileDestroyRequest;
use App\Http\Requests\ProfileUpdateRequest;
use App\Services\UserService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(): Response
    {
        return $this->renderAppView(
            'Account',
            [
                'status' => session('status'),
                'has_verified_email' => Auth::user()->hasVerifiedEmail(),
            ]
        );
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request, UserService $userService): RedirectResponse
    {
        $userService->update($request->validated());

        return back()->with("status", "Profile info updated");
    }

    /**
     * Delete the user's account.
     */
    public function destroy(ProfileDestroyRequest $request, UserService $userService)
    {
        $userService->destroy();
    }
}
