import React from "react";
import MovieCardImage from "./MovieCardImage";
import MovieCardContent from "./MovieCardContent";

interface MovieCardProps {
    thumbnail_path: string;
}

const MovieCard = ({ thumbnail_path }: MovieCardProps) => {
    return (
        <>
            <div className="group relative aspect-card cursor-pointer md:w-[calc((100%/6)-1rem)] transition-all duration-300  md:shrink-0 md:hover:w-[30%] md:hover:aspect-video ">
                <MovieCardImage thumbnail_path={thumbnail_path} />
                <MovieCardContent />
            </div>
        </>
    );
};

export default MovieCard;
