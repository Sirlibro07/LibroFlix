import React, { useContext } from "react";
import Slider from "./Slider";
import MovieCard from "./MovieCard";
import MoviesContext from "@/Contexts/MoviesContext";
import Grid from "./Grid";

const MoviesSection = () => {
    const movies = useContext(MoviesContext).data;
    console.log(movies);

    const thumbnail_path = (title: string) => {
        return title.replace(/ /g, "_");
    };

    const renderMovieCard = (movie) => (
        <MovieCard
            thumbnail_path={thumbnail_path(movie.title)}
            key={movie.id}
            cards_number="5"
        />
    );

    return (
        <>
            <p className="text-typescale_23_px font-medium mb-6 md:text-typescale_33_px  mt-16 md:mt-[120px]">
                Movies
            </p>
            <Grid>{movies.map(renderMovieCard)}</Grid>
            <Slider>{movies.map(renderMovieCard)}</Slider>
        </>
    );
};

export default MoviesSection;
