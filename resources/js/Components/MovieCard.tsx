import imgStoragePath from "@/Helpers/imgStoragePath";
import underscoreToSpace from "@/Helpers/underscoreToSpace";
import React from "react";

const MovieCard = ({ title }) => {
    return (
        <img
            src={imgStoragePath(`cards/movies/${underscoreToSpace(title)}`)}
            alt="movie-card-img"
            className="hidden object-cover aspect-card mt-[-150px] rounded-[20px] mr-6  md:block"
        />
    );
};

export default MovieCard;
