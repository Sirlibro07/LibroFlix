import React from "react";
import MovieCardPlayButton from "./MovieCardPlayButton";
import MovieCardTitle from "./MovieCardTitle";

const MovieCardContent = () => {
    return (
        <div className="opacity-0 transition-all duration-300 group-hover:opacity-100">
            <MovieCardPlayButton />
            <MovieCardTitle
                title={"Naruto Og Movie 1:\n Ninja Clash in the Land of Snow"}
            />
        </div>
    );
};

export default MovieCardContent;
