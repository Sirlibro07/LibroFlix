import imgStoragePath from "@/Helpers/imgStoragePath";
import React from "react";

interface MovieCardImageProps {
    name: string;
}

const MovieCardImage = ({ name }: MovieCardImageProps) => {
    const img = (name: string) => {
        return imgStoragePath(`cards/movies/${name}`);
    };
    return (
        <img
            src={img(name)}
            alt={`movie-${name}-card-bg-image`}
            decoding="async"
            className="w-full h-full object-cover rounded-10"
        />
    );
};

export default MovieCardImage;
