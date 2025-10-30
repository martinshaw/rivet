<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Page>
 */
class PageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        return [
            'title' => $this->faker->sentence(),
            'content' => json_encode([
                'type' => 'page/1',
                'content' => [
                    [  
                        'type' => 'paragraph/1',
                        'content' => [
                            [
                                'type' => 'text/1',
                                'text' => $this->faker->paragraph(),
                            ],
                        ],
                    ],
                ],
            ]),
            'path' => $this->faker->slug(),
            'published_at' => null,
            'published_by_user_id' => null,
        ];
    }

    public function forPublished(User $user): static
    {
        return $this->state(function (array $attributes) use ($user) {
            return [
                'published_at' => now(),
                'published_by_user_id' => $user->id,
            ];
        });
    }
}
