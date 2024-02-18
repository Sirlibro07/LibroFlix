<?php

namespace App\Listeners;

use App\Events\PasswordUpdated;
use App\Mail\PasswordUpdatedEmail;
use App\Models\User;
use App\Services\PasswordResetService;
use App\Services\SendEmailService;
use App\Services\SignedRouteService;
use Illuminate\Contracts\Queue\ShouldQueue;

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
    public function handle(PasswordUpdated $event): void
    {
        $user = User::where("email", $event->email)->first();


        (new PasswordResetService)->generatePasswordResetToken($user);
        $signed_route = (new SignedRouteService)->SignedRoute('password.reset', 5, $user->email, $user->password_reset_token);
        (new SendEmailService)->sendEmailAsJob(new PasswordUpdatedEmail($signed_route, $user->email));
    }
}
