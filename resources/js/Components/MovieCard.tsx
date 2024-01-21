import React from "react";
import MovieCardImage from "./MovieCardImage";
import MovieCardContent from "./MovieCardContent";

interface MovieCardProps {
    thumbnail_path: string;
}

const MovieCard = ({ thumbnail_path }: MovieCardProps) => {
    return (
        <>
            <div className="group relative cursor-pointer transition-all duration-300 aspect-card  md:shrink-0 md:w-[225px] md:h-[340px] md:hover:w-[30%] ">
                <MovieCardImage thumbnail_path={thumbnail_path} />
                <MovieCardContent />
            </div>
        </>
    );
};

export default MovieCard;
