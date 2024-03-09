<?php

namespace App\Listeners;

use App\Events\PasswordUpdated;
use App\Mail\PasswordUpdatedEmail;
use App\Models\User;
use App\Services\PasswordResetService;
use App\Traits\SignedRouteManager;
use App\Traits\EmailManager;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendPasswordUpdatedEmail implements ShouldQueue
{
    use SignedRouteManager, EmailManager;

    public PasswordResetService $password_reset_service;

    public function __construct(PasswordResetService $password_reset_service)
    {
        $this->password_reset_service = $password_reset_service;
    }

    /**
     * Handle the event.
     */
    public function handle(PasswordUpdated $event): void
    {
        $user = User::where("email", $event->email)->first();

        $this->password_reset_service->generateAndStorePasswordResetToken($user);

        $signed_route = $this->getAuthSignedRoute('password_reset.create', now()->addHour(), $user->email, $user->password_reset_token);

        $this->sendEmailAsJob(new PasswordUpdatedEmail($signed_route, $user->email));
    }
}
