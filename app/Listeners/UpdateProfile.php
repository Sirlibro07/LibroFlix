<?php

namespace App\Listeners;

use App\Events\ProfileUpdateRequested;
use Illuminate\Support\Str;

class UpdateProfile
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
    public function handle(ProfileUpdateRequested $event): void
    {
        $user = $event->user;

        $user->fill($event->data);

        if ($user->isDirty('email')) {
            $user->email_verified_at = null;
            $user->email_verification_token = base64_encode(Str::random(60));
        }

        $user->save();
    }
}
