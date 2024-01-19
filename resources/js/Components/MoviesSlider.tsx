import React from "react";
import Slider from "./Slider";
import MovieCard from "./MovieCard";

interface MoviesSliderProps {
    movies: any; //still need to decide how the apiResource will look like on the backend side
}

const MoviesSlider = ({ movies }: MoviesSliderProps) => {
    return (
        <Slider>
            {movies.map((movie) => (
                <MovieCard name={movie.name} />
            ))}
        </Slider>
    );
};

export default MoviesSlider;
