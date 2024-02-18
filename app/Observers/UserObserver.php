<?php

namespace App\Observers;

use App\Events\ProfileDeleted;
use App\Events\Registered;
use App\Models\User;

class UserObserver
{
    /**
     * Handle the User "created" event.
     */
    public function created(User $user): void
    {
        event(new Registered($user->email));
    }

    /**
     * Handle the User "updated" event.
     */
    public function updated(User $user): void
    {
        // event(new ProfileUpdated($user->email));
    }

    /**
     * Handle the User "deleted" event.
     */
    public function deleted(User $user): void
    {
        event(new ProfileDeleted($user->email));
    }

    /**
     * Handle the User "restored" event.
     */
    public function restored(User $user): void
    {
        //
    }

    /**
     * Handle the User "force deleted" event.
     */
    public function forceDeleted(User $user): void
    {
        //
    }
}
