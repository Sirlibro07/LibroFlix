import React, { useContext } from "react";
import Slider from "./Slider";
import MoviesContext from "@/Contexts/MoviesContext";
import SliderCard from "./SliderCard";
import thumbnail_path from "@/Helpers/thumbnail_path";

const SliderSection = () => {
    const movies = useContext(MoviesContext).data;

    return (
        <Slider total_cards={movies.length} title="Movies">
            {movies.map((movie) => (
                <SliderCard
                    route_name={"home"}
                    key={movie.id}
                    thumbnail_path={thumbnail_path(movie.title)}
                />
            ))}
        </Slider>
    );
};

export default SliderSection;
