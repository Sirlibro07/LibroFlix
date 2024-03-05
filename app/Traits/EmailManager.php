<?php

namespace App\Traits;

use App\Jobs\SendEmailJob;
use Illuminate\Mail\Mailable;
use Illuminate\Support\Facades\Log;

trait EmailManager
{
    public function sendEmailAsJob(Mailable $mail): void
    {
        Log::info("reached email trait method");
        if (!app()->environment(['local', 'testing'])) {
            abort(500); // had to do this bc I don't have an actual email infrastructure/provider/plan
        }
        SendEmailJob::dispatch($mail);
    }
}
