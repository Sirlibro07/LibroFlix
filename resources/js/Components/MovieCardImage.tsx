import imgStoragePath from "@/Helpers/imgStoragePath";
import React from "react";

interface MovieCardImageProps {
    thumbnail_path: string;
}

const MovieCardImage = ({ thumbnail_path }: MovieCardImageProps) => {
    const img = () => {
        return imgStoragePath(`cards/movies/${thumbnail_path}`);
    };
    return (
        <img
            src={img()}
            alt={`movie-${thumbnail_path}-card-bg-image`}
            decoding="async"
            className="w-full h-full object-cover object-top rounded-10 transitions group-hover:brightness-[30%]"
        />
    );
};

export default MovieCardImage;
