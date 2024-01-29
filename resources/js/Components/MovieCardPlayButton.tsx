import imgStoragePath from "@/Helpers/imgStoragePath";
import React from "react";

const MovieCardPlayButton = () => {
    const img = () => {
        return imgStoragePath("cards/icons/play");
    };

    return (
        <div className="opacity-0 transition-all duration-300 group-hover:opacity-100 absolute bg-red-500 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[45%] md:w-[35%]">
            <img src={img()} alt="play-icon" decoding="async" />
        </div>
    );
};

export default MovieCardPlayButton;
