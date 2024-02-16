<?php

use Illuminate\Support\Str;

function generatePasswordResetToken($user): void
{
    $user->password_reset_token =  base64_encode(Str::random(60));
    $user->save();
}
