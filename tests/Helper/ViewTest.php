<?php

namespace Tests\Helper;

use Illuminate\Testing\TestResponse;

trait ViewTest
{
    public function assertViewResponse(TestResponse $response): void
    {
        $response->assertOk();
        $response->assertInertia();
    }
}
