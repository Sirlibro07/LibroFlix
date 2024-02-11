<?php

namespace App\Listeners;

use App\Events\PasswordUpdateRequested;
use App\Mail\PasswordUpdatedEmail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class SendPasswordUpdatedEmail implements ShouldQueue
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(PasswordUpdateRequested $event): void
    {
        $user = $event->user;

        $user->password_reset_token =  base64_encode(Str::random(60));
        $user->save();
        $url = SignedRoute('password.reset', 5, $user, $user->password_reset_token);
        sendEmail(new PasswordUpdatedEmail($url, $user->email));
    }
}
