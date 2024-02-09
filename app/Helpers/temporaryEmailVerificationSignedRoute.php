<?php

use Illuminate\Support\Facades\URL;


function temporaryEmailVerificationSignedRoute($user)
{
    return URL::temporarySignedRoute('verification.verify', now()->addMinutes(30), ['id' => $user->id, 'hash' => $user->email_verification_token]);
}
