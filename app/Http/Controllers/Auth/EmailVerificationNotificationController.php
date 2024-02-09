<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Mail\VerificationEmail;
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

            $url = temporaryEmailVerificationSignedRoute($request->user());

            Mail::send(new VerificationEmail($url));
        }
    }
}
