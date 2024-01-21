import imgStoragePath from "@/Helpers/imgStoragePath";
import React from "react";

const MovieCardPlayButton = () => {
    const img = () => {
        return imgStoragePath("cards/icons/play");
    };

    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[45%] md:w-[35%]">
            <img src={img()} alt="play-icon" decoding="async" />
        </div>
    );
};

export default MovieCardPlayButton;
