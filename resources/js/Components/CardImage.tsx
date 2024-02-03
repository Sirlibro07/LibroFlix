import imgStoragePath from "@/Helpers/imgStoragePath";
import React from "react";

interface CardImageProps {
    thumbnail_path: string;
}

const CardImage = ({ thumbnail_path }: CardImageProps) => {
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

export default CardImage;
