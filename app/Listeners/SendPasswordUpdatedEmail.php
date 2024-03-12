<?php

namespace App\Listeners;

use App\Events\PasswordUpdated;
use App\Mail\PasswordUpdatedEmail;
use App\Models\User;
use App\Services\PasswordResetService;
use App\Traits\SignedRouteManager;
use App\Traits\EmailManager;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Log;

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
        $body = 'Your password has been updated. If it was not you';
        $this->password_reset_service->sendPasswordResetEmail($event->email, $body);
    }
}
