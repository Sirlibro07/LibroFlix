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
            className="w-full h-full object-cover rounded-10 transition-all duration-300 group-hover:brightness-[30%]"
        />
    );
};

export default MovieCardImage;
