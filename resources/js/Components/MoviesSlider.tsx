import React, { useContext } from "react";
import Slider from "./Slider";
import MovieCard from "./MovieCard";
import MoviesContext from "@/Contexts/MoviesContext";

const MoviesSlider = () => {
    const movies = useContext(MoviesContext).data;
    console.log(movies);

    const thumbnail_path = (title: string) => {
        return title.replace(/ /g, "_");
    };

    return (
        <>
            <p className="text-typescale_23_px font-medium mb-6 md:text-typescale_33_px  mt-16 md:mt-[120px]">
                Movies
            </p>
            <Slider>
                {movies.map((movie, index) => (
                    <MovieCard
                        thumbnail_path={thumbnail_path(movie.title)}
                        key={index}
                    />
                ))}
            </Slider>
        </>
    );
};

export default MoviesSlider;
