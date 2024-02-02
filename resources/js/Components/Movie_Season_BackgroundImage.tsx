import imgStoragePath from "@/Helpers/imgStoragePath";
import React from "react";

interface Movie_Season_BackgroundImageProps {
    path: string;
}

const Movie_Season_BackgroundImage = ({
    path,
}: Movie_Season_BackgroundImageProps) => {
    return (
        <img
            src={imgStoragePath(path)}
            className="w-full aspect-card object-cover absolute top-[90px] z-[-1]"
        />
    );
};

export default Movie_Season_BackgroundImage;
