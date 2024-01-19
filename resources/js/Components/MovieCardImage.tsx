import imgStoragePath from "@/Helpers/imgStoragePath";
import React from "react";

interface MovieCardImageProps {
    name: string;
}

const MovieCardImage = ({ name }: MovieCardImageProps) => {
    const img = () => {
        return imgStoragePath(`cards/movies/${name}`);
    };
    return (
        <img
            src={img()}
            alt={`movie-${name}-card-bg-image`}
            className="w-full h-full object-cover rounded-10 transition-all duration-300 group-hover:brightness-[30%]"
        />
    );
};

export default MovieCardImage;
