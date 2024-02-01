import React, { useContext } from "react";
import Slider from "./Slider";
import MoviesContext from "@/Contexts/MoviesContext";
import SliderCard from "./SliderCard";

const SliderSection = () => {
    const movies = useContext(MoviesContext).data;

    const thumbnail_path = (title: string) => {
        return title.replace(/ /g, "_");
    };

    const renderSliderCard = (
        element: { id: number; title: string },
        folder: string
    ) => (
        <SliderCard
            route_name={"home"}
            key={element.id}
            visible_cards={5}
            thumbnail_path={`${folder}/${thumbnail_path(element.title)}`}
        />
    );

    return (
        <>
            <Slider total_cards={movies.length} title="Movies">
                {movies.map((movie) => renderSliderCard(movie, "movies"))}
            </Slider>
        </>
    );
};

export default SliderSection;
