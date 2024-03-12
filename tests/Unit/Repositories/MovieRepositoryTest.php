<?php

namespace Tests\Unit\Repositories;

use App\Models\Movie;
use App\Repositories\MovieRepository;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Tests\TestCase;

class MovieRepositoryTest extends TestCase
{
    use RefreshDatabase;
    private MovieRepository $movie_repository;

    protected function setUp(): void
    {
        parent::setUp();

        $this->movie_repository  = new MovieRepository();
    }

    public function test_getAllMovies_returns_all_movies(): void
    {
        // Arrange
        $expected_movies = Movie::factory(5)->create();

        // Act
        $result = $this->movie_repository->getAllMovies($expected_movies);

        // Assert
        $this->assertMoviesMatchExpected($expected_movies, $result);
    }

    /**
     * @dataProvider searchTokens
     */
    public function test_getMoviesBySearch_returns_correct_movies_when_search_query_is_true(array $tokens): void
    {
        // Arrange
        $expected_movies = new Collection();
        foreach ($tokens as $i => $token) {
            $expected_movies[] = Movie::factory()->create(['title' => $token]);
            $tokens[$i] = substr($token, 0, -1);
        }
        $search_query = implode(' ', $tokens);

        // Act
        $result = $this->movie_repository->getMoviesBySearch($search_query);

        // Assert
        $this->assertMoviesMatchExpected($expected_movies, $result);
    }

    public function test_getMoviesBySearch_returns_all_movies_when_search_query_is_false()
    {
        // Arrange
        $expected_movies = Movie::factory(5)->create();
        $search_query = '';

        // Act
        $result = $this->movie_repository->getMoviesBySearch($search_query);

        // Assert
        $this->assertMoviesMatchExpected($expected_movies, $result);
    }


    /**
     * @param Collection $expected_movies
     * @param AnonymousResourceCollection $result
     * @return void
     */
    private function assertMoviesMatchExpected(Collection $expected_movies, AnonymousResourceCollection $result): void
    {
        $this->assertCount(count($expected_movies), $result);
        $this->assertInstanceOf(AnonymousResourceCollection::class, $result);
        $this->assertMovieEquals($expected_movies, $result);
    }

    private function assertMovieEquals(Collection $expected_movies, AnonymousResourceCollection $result): void
    {
        foreach ($result as $i => $movie) {
            $this->assertEquals($expected_movies[$i]->id, $movie->id);
        }
    }

    public static function searchTokens(): array
    {
        return [
            [['Naruto', 'Attack on Titan', 'Breaking Bad']],
            [['Spirited Away', 'The Godfather', 'Inception', 'Pulp Fiction', 'The Shawshank Redemption']],
            [['Avatar', 'The Lion King', 'Jurassic Park', 'Forrest Gump', 'Gladiator']],
            [['One Piece', 'Death Note', 'Game of Thrones', 'The Witcher', 'Friends']],
            [['The Avengers', 'Titanic', 'The Silence of the Lambs', 'Fight Club', 'The Prestige']],
        ];
    }

    /**
     * @param AnonymousResourceCollection $result
     * @param Collection $expected_movies
     * @return void
     */
}
