import imgStoragePath from "@/Helpers/imgStoragePath";
import React from "react";

interface SliderCardImageProps {
    thumbnail_path: string;
}

const SliderCardImage = ({ thumbnail_path }: SliderCardImageProps) => {
    const img = () => {
        return imgStoragePath(`cards/${thumbnail_path}`);
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

export default SliderCardImage;
