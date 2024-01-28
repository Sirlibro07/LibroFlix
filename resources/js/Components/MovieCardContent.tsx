import React from "react";
import MovieCardPlayButton from "./MovieCardPlayButton";
import MovieCardTitle from "./MovieCardTitle";

interface MovieCardContentProps {
    version: string;
    title: string;
    id: number;
}

const MovieCardContent = ({ version, title, id }: MovieCardContentProps) => {
    return (
        <div className="opacity-0 transition-all duration-300 group-hover:opacity-100">
            <MovieCardPlayButton />
            <MovieCardTitle
                title={`Naruto ${version} Movie ${id}:\n  ${title}`}
                // title={"Naruto Og Movie 1:\n Ninja Clash in the Land of Snow"}
            />
        </div>
    );
};

export default MovieCardContent;
