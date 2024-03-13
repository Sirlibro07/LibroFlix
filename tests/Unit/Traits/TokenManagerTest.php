<?php

namespace Tests\Unit\Traits;

use App\Traits\TokenManager;
use Tests\TestCase;

class TokenManagerTest extends TestCase
{
    use TokenManager;

    public function test_getToken_returns_encoded_token(): void
    {
        // Act
        $result = $this->getToken();

        // Assert
        $this->assertIsString($result);
        $is_base_64 = base64_encode(base64_decode($result)) === $result;
        $this->assertTrue($is_base_64);
    }
}
