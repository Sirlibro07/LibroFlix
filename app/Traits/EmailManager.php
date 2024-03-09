<?php

namespace App\Traits;

use App\Jobs\SendEmailJob;
use Illuminate\Mail\Mailable;

trait EmailManager
{
    public function sendEmailAsJob(Mailable $mail): void
    {
        if (!app()->environment(['local', 'testing'])) {
            abort(500); // had to do this bc I don't have an actual email infrastructure/provider/plan
        }
        SendEmailJob::dispatch($mail);
    }
}
