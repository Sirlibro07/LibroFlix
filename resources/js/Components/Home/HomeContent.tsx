import React, { useContext } from "react";
import FirstMovie from "./FirstMovie";
import Slider from "../Slider/Slider";
import MoviesContext from "@/Contexts/MoviesContext";

const HomeContent = () => {
    const movies = useContext(MoviesContext).data;
    return (
        <div className={`w-full text-white mt-[9rem]`}>
            <FirstMovie />
            <Slider total_cards={movies.length} title="Movies" />
        </div>
    );
};

export default HomeContent;
