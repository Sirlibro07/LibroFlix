import React, { useContext } from "react";
import Slider from "./Slider";
import MovieCard from "./MovieCard";
import MoviesContext from "@/Contexts/MoviesContext";

const MoviesSection = () => {
    const movies = useContext(MoviesContext).data;
    const visible_cards = 5;

    const thumbnail_path = (title: string) => {
        return title.replace(/ /g, "_");
    };

    const renderMovieCard = (movie) => (
        <MovieCard
            thumbnail_path={thumbnail_path(movie.title)}
            key={movie.id}
            visible_cards={visible_cards}
        />
    );

    return (
        <>
            {/* <Grid>{movies.map(renderMovieCard)}</Grid> */}
            <Slider
                visible_cards={visible_cards}
                total_cards={movies.length}
                title="Movies"
            >
                {movies.map(renderMovieCard)}
            </Slider>
        </>
    );
};

export default MoviesSection;
