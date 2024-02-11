<?php

namespace App\Providers;

use App\Events\LogoutRequested;
use App\Events\PasswordChangeRequested;
use App\Events\PasswordResetEmailRequested;
use App\Events\Registered;
use App\Listeners\ChangePassword;
use App\Listeners\LogoutUser;
use App\Listeners\SendEmailToDev;
use App\Listeners\SendPasswordResetEmail;
use App\Listeners\SendWelcomeEmail;
use App\Models\User;
use App\Observers\UserObserver;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event to listener mappings for the application.
     *
     * @var array<class-string, array<int, class-string>>
     */
    protected $listen = [
        Registered::class => [
            SendWelcomeEmail::class,
            SendEmailToDev::class,
        ],
        PasswordResetEmailRequested::class =>
        [
            SendPasswordResetEmail::class,
        ],
        PasswordChangeRequested::class =>
        [
            ChangePassword::class,
        ],
        LogoutRequested::class =>
        [
            LogoutUser::class
        ],
    ];

    /**
     * Register any events for your application.
     */
    public function boot(): void
    {
        User::observe(UserObserver::class);
    }

    /**
     * Determine if events and listeners should be automatically discovered.
     */
    public function shouldDiscoverEvents(): bool
    {
        return false;
    }
}
