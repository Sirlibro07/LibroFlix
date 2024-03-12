<?php

namespace App\Traits;

use Illuminate\Mail\Mailable;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

trait EmailManager
{
    public function sendEmail(Mailable $mail): void
    {
        Mail::send($mail);
        Log::info('mail has been sent now !');
    }

    public function getEmailSentMessage(string $email_name): string
    {
        return $email_name . ' sent, it could take some minutes to arrive.';
    }
}
