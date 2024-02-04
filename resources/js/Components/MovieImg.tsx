import imgStoragePath from "@/Helpers/imgStoragePath";
import underscoreToSpace from "@/Helpers/underscoreToSpace";
import React from "react";

const MovieImg = ({ title }) => {
    return (
        <img
            src={imgStoragePath(`cards/movies/${underscoreToSpace(title)}`)}
            alt="movie-card-img"
            decoding="async"
            className="hidden object-cover aspect-card mt-[-150px] rounded-[20px] mr-7 md:block"
        />
    );
};

export default MovieImg;
