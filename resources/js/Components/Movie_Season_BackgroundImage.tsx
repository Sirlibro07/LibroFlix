import React from "react";
import BackgroundImage from "./BackgroundImage";

interface Movie_Season_BackgroundImageProps {
    title: string;
}

const Movie_Season_BackgroundImage = ({
    title,
}: Movie_Season_BackgroundImageProps) => {
    return (
        <BackgroundImage
            folder_name={`movies/${title}`}
            picture_classes="w-full aspect-card absolute top-[90px] z-[-1]"
        />
    );
};

export default Movie_Season_BackgroundImage;
