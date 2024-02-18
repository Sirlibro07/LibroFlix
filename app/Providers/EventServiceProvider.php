<?php

namespace App\Providers;

use App\Events\PasswordUpdated;
use App\Events\ProfileDeleted;
use App\Events\ProfileUpdated;
use App\Events\Registered;
use App\Listeners\SendEmailToDev;
use App\Listeners\SendGoodbyeEmail;
use App\Listeners\SendPasswordUpdatedEmail;
use App\Listeners\SendProfileUpdatedEmail;
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
        ProfileUpdated::class =>
        [
            SendProfileUpdatedEmail::class
        ],
        ProfileDeleted::class => [
            SendGoodbyeEmail::class
        ],
        PasswordUpdated::class => [
            SendPasswordUpdatedEmail::class,
        ]
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
