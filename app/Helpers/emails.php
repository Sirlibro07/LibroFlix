<?php

use Illuminate\Mail\Mailable;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

function sendEmail(Mailable $mail): void
{
    try {
        Log::info("tried to send email");
        Mail::send($mail);
    } catch (Exception $e) {
        Log::error("something went wrong ! " . $e->getMessage());
    }
}
