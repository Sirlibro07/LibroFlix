import imgStoragePath from "@/Helpers/imgStoragePath";
import React from "react";

interface SliderCardImageProps {
    underscoreToSpace: string;
}

const SliderCardImage = ({ underscoreToSpace }: SliderCardImageProps) => {
    const img = () => {
        return imgStoragePath(`cards/movies/${underscoreToSpace}`);
    };
    return (
        <img
            src={img()}
            alt={`movie-${underscoreToSpace}-card-bg-image`}
            decoding="async"
            className="w-full h-full object-cover object-top rounded-10 transitions group-hover:brightness-[30%]"
        />
    );
};

export default SliderCardImage;
