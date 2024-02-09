<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Mail\VerificationEmail;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Mail;

class EmailVerificationNotificationController extends Controller
{
    /**
     * Send a new email verification notification.
     */
    public function store(Request $request)
    {
        $user = $request->user();
        if (!$user->hasVerifiedEmail()) {

            $url = Url::temporarySignedRoute('verification.verify', now()->addMinutes(30), ['id' => $user->id, 'hash' => $user->email_verification_token]);

            Mail::send(new VerificationEmail($url));
        }
    }
}
