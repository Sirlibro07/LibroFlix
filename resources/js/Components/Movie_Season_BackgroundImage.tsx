import imgStoragePath from "@/Helpers/imgStoragePath";
import React from "react";

interface Movie_Season_BackgroundImageProps {
    title: string;
}

const Movie_Season_BackgroundImage = ({
    title,
}: Movie_Season_BackgroundImageProps) => {
    return (
        <picture className={`w-full aspect-card absolute top-[90px] z-[-1]`}>
            <source
                media="(min-width: 768px)"
                srcSet={imgStoragePath(`backgrounds/movies/${title}`)}
            />

            <img
                className={`w-full h-full object-cover object-bottom`}
                alt="background-image"
                src={imgStoragePath(`cards/movies/${title}`)}
                decoding="async"
            />
        </picture>
    );
};

export default Movie_Season_BackgroundImage;
