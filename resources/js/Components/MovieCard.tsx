import React from "react";
import MovieCardImage from "./MovieCardImage";
import MovieCardContent from "./MovieCardContent";

interface MovieCardProps {
    thumbnail_path: string;
}

const MovieCard = ({ thumbnail_path }: MovieCardProps) => {
    return (
        <>
            <div className="group relative cursor-pointer transition-all duration-300 md:shrink-0 md:hover:scale-[.95]">
                <MovieCardImage thumbnail_path={thumbnail_path} />
                <MovieCardContent />
            </div>
        </>
    );
};

export default MovieCard;
