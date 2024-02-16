<?php

namespace App\Http\Controllers;

use App\Events\ProfileDeleteRequested;
use App\Events\ProfileUpdateRequested;
use App\Http\Requests\ProfileUpdateRequest;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Inertia\Response;

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
                'has_verified_email' => $request->user()->hasVerifiedEmail(),
            ]
        );
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        event(new ProfileUpdateRequested($request->user()->email, $request->validated()));

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

        event(new ProfileDeleteRequested($request->user()->id));

        return Redirect::to(RouteServiceProvider::HOME);
    }
}
