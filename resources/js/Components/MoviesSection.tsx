import React, { useContext } from "react";
import Slider from "./Slider";
import MoviesContext from "@/Contexts/MoviesContext";
import SliderCard from "./SliderCard";
import MovieType from "@/Helpers/interfaces/MovieType";

const MoviesSection = () => {
    const movies = useContext(MoviesContext).data;
    const visible_cards = 5;

    const thumbnail_path = (title: string) => {
        return title.replace(/ /g, "_");
    };

    const renderMovieCard = (movie: MovieType) => (
        <SliderCard
            route_name={"home"}
            visible_cards={5}
            thumbnail_path={thumbnail_path(movie.title)}
        />
    );

    return (
        <>
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
