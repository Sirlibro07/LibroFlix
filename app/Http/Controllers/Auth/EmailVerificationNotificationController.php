<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Services\EmailVerificationService;
use Illuminate\Support\Facades\Auth;

class EmailVerificationNotificationController extends Controller
{
    public function store(EmailVerificationService $EmailVerificationService)
    {
        $EmailVerificationService->SendEmail(Auth::user()->email);

        return back()->with("status", "email verification sent, it could take some seconds for it to arrive");
    }
}
