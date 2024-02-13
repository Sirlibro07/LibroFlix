import imgStoragePath from "@/Shared/functions/imgStoragePath";
import underscoreToSpace from "@/Shared/functions/underscoreToSpace";
import React from "react";

interface MovieImgProps {
    title: string;
}

const MovieImg = ({ title }: MovieImgProps) => {
    return (
        <img
            src={imgStoragePath(`cards/movies/${underscoreToSpace(title)}`)}
            alt="movie-card-img"
            decoding="async"
            className="hidden object-cover aspect-card mt-[-9.375rem] rounded-[1.25rem] mr-7 md:block"
        />
    );
};

export default MovieImg;
