<?php

namespace App\Traits;

use Illuminate\Mail\Mailable;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

trait EmailManager
{
    public function sendEmailAsJob(Mailable $mail): void
    {
        try {
            Mail::send($mail);
        } catch (\Exception $e) {
            Log::info($e->getMessage());
        }
    }

    public function getEmailSentMessage(string $email_name)
    {
        return $email_name . ' sent, it could take some minutes to arrive.';
    }
}
