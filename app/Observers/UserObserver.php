<?php

namespace App\Observers;

use App\Events\ProfileDeleted;
use App\Events\Registered;
use App\Models\User;

class UserObserver
{
    public function created(User $user): void
    {
        event(new Registered($user->email));
    }
    public function deleted(User $user): void
    {
        event(new ProfileDeleted($user->email));
    }
}
