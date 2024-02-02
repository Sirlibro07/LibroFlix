import imgStoragePath from "@/Helpers/imgStoragePath";
import thumbnail_path from "@/Helpers/thumbnail_path";
import React from "react";

const MovieCard = ({ title }) => {
    return (
        <img
            src={imgStoragePath(`cards/movies/${thumbnail_path(title)}`)}
            alt="movie-card-img"
            className="hidden aspect-card mt-[-130px] rounded-[20px] mr-6  md:block"
        />
    );
};

export default MovieCard;
