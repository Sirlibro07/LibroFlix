<?php

namespace App\Http\Controllers\Auth;

use App\Events\EmailVerificationNotificationRequested;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class EmailVerificationNotificationController extends Controller
{
    public function store(Request $request)
    {
        event(new EmailVerificationNotificationRequested($request->user()->email));

        return back()->with("status", "email verification sent, it could take some seconds for it to arrive");
    }
}
