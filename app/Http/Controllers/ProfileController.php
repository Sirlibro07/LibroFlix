<?php

namespace App\Http\Controllers;

use App\Events\ProfileUpdateRequested;
use App\Http\Requests\ProfileUpdateRequest;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Response;
use Illuminate\Support\Str;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return $this->renderAppView(
            'Account',
            [
                'status' => session('status'),
                'has_verified_email' => !$request->user()->hasVerifiedEmail(),
            ]
        );
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        ProfileUpdateRequested::dispatch($request->user(), $request->validated());

        return back()->with("status", "Profile info updated");
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();
        //TODO make this to event

        return Redirect::to(RouteServiceProvider::HOME);
    }
}
