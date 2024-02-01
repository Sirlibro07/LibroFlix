import React, { useContext } from "react";
import Slider from "./Slider";
import MoviesContext from "@/Contexts/MoviesContext";
import SliderCard from "./SliderCard";
import MovieType from "@/Helpers/interfaces/MovieType";

const SliderSection = () => {
    const movies = useContext(MoviesContext).data;
    const visible_cards = 5;

    const thumbnail_path = (title: string) => {
        return title.replace(/ /g, "_");
    };

    const renderSliderCard = (movie: MovieType, folder: string) => (
        <SliderCard
            route_name={"home"}
            key={movie.id}
            visible_cards={5}
            thumbnail_path={`${folder}/${thumbnail_path(movie.title)}`}
        />
    );

    return (
        <>
            <Slider
                visible_cards={visible_cards}
                total_cards={movies.length}
                title="Movies"
            >
                {movies.map((movie) => renderSliderCard(movie, "movies"))}
            </Slider>
        </>
    );
};

export default SliderSection;
