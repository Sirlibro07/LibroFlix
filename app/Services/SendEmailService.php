<?php

namespace App\Services;

use App\Jobs\SendEmailJob;
use Illuminate\Mail\Mailable;

class SendEmailService
{
    public function sendEmailAsJob(Mailable $mail): void
    {
        SendEmailJob::dispatch($mail);
    }
}
