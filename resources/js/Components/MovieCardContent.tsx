import React from "react";
import MovieCardPlayButton from "./MovieCardPlayButton";

const MovieCardContent = () => {
    return (
        <div className="opacity-0 transition-all duration-300 group-hover:opacity-100">
            <MovieCardPlayButton />
        </div>
    );
};

export default MovieCardContent;
