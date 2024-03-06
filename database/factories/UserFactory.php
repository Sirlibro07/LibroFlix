<?php

namespace Database\Factories;

use App\Traits\TokenManager;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    use TokenManager;

    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->sentence(),
            'email' => $this->faker->email(),
            'password' => static::$password ??= Hash::make('password'),
            'email_verification_token' => $this->getToken(),
        ];
    }
}
