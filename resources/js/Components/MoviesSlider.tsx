import React from "react";
import Slider from "./Slider";
import MovieCard from "./MovieCard";

interface MoviesSliderProps {
    movies: any; //still need to decide how the apiResource will look like on the backend side
}

const MoviesSlider = ({ movies }: MoviesSliderProps) => {
    console.log(movies.length);

    return (
        <>
            <p className="text-typescale_23_px font-medium mb-6 md:text-typescale_33_px">
                Movies
            </p>
            <Slider>
                {movies.map((movie, index) => (
                    <MovieCard
                        thumbnail_path={movie.thumbnail_path}
                        key={index}
                        cards_number={movies.length}
                    />
                ))}
            </Slider>
        </>
    );
};

export default MoviesSlider;
