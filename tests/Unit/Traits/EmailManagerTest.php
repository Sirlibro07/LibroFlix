<?php

namespace Tests\Unit\Traits;

use App\Traits\EmailManager;
use Illuminate\Mail\Mailable;
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;

class EmailManagerTest extends TestCase
{
    use EmailManager;

    public function test_sendEmail_sends_email(): void
    {
        // Arrange
        Mail::fake();
        $mail = $this->app->make(Mailable::class);

        // Act
        $this->sendEmail($mail);

        // Assert
        Mail::assertSent(Mailable::class);
    }
}
