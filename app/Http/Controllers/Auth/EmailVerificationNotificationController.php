<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Jobs\SendEmailJob;
use App\Mail\VerificationEmail;
use Illuminate\Http\Request;

class EmailVerificationNotificationController extends Controller
{
    public function store(Request $request)
    {
        $user = $request->user();
        if (!$user->hasVerifiedEmail()) {

            $url = temporaryEmailVerificationSignedRoute($request->user());

            SendEmailJob::dispatch(new VerificationEmail($user, $url));

            return back()->with("status", "email sent");
        }
    }
}
