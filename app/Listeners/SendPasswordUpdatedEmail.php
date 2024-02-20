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
    public SendEmailService $send_email_service;
    public PasswordResetService $password_reset_service;
    public SignedRouteService $signed_route_service;

    public function __construct(SendEmailService $send_email_service, PasswordResetService $password_reset_service, SignedRouteService $signed_route_service)
    {
        $this->send_email_service = $send_email_service;
        $this->password_reset_service = $password_reset_service;
        $this->signed_route_service = $signed_route_service;
    }

    /**
     * Handle the event.
     */
    public function handle(PasswordUpdated $event): void
    {
        $user = User::where("email", $event->email)->first();

        $this->password_reset_service->generateAndStorePasswordResetToken($user);

        $signed_route = $this->signed_route_service->signedRoute('password.reset', now()->addHour(), $user->email, $user->password_reset_token);

        $this->send_email_service->sendEmailAsJob(new PasswordUpdatedEmail($signed_route, $user->email));
    }
}
