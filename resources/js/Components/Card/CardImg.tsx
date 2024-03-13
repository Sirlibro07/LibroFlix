import imgStoragePath from "@/Helpers/functions/img/imgStoragePath";
import React from "react";

export interface CardImgProps {
    thumbnail_path: string;
}

const CardImg = ({ thumbnail_path }: CardImgProps) => {
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

export default CardImg;
