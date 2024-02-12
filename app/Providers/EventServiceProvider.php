<?php

namespace App\Providers;

use App\Events\EmailVerificationNotificationRequested;
use App\Events\LoginRequested;
use App\Events\LogoutRequested;
use App\Events\PasswordChangeRequested;
use App\Events\PasswordResetEmailRequested;
use App\Events\PasswordUpdateRequested;
use App\Events\ProfileDeleted;
use App\Events\ProfileDeleteRequested;
use App\Events\ProfileUpdateRequested;
use App\Events\Registered;
use App\Events\RegisterRequested;
use App\Listeners\ChangePassword;
use App\Listeners\DeleteProfile;
use App\Listeners\LoginUser;
use App\Listeners\LogoutUser;
use App\Listeners\Register;
use App\Listeners\SendEmailToDev;
use App\Listeners\SendEmailVerificationNotification;
use App\Listeners\SendGoodbyeEmail;
use App\Listeners\SendPasswordResetEmail;
use App\Listeners\SendPasswordUpdatedEmail;
use App\Listeners\SendWelcomeEmail;
use App\Listeners\UpdatePassword;
use App\Listeners\UpdateProfile;
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
        RegisterRequested::class => [
            Register::class,
        ],
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
        LoginRequested::class => [
            LoginUser::class
        ],
        LogoutRequested::class =>
        [
            LogoutUser::class
        ],
        EmailVerificationNotificationRequested::class =>
        [
            SendEmailVerificationNotification::class
        ],
        ProfileUpdateRequested::class => [
            UpdateProfile::class
        ],
        ProfileDeleteRequested::class => [
            LogoutUser::class,
            DeleteProfile::class
        ],
        ProfileDeleted::class => [
            SendGoodbyeEmail::class
        ],
        PasswordUpdateRequested::class => [
            UpdatePassword::class,
            SendPasswordUpdatedEmail::class,
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
