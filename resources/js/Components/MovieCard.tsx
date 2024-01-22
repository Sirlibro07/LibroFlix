import React from "react";
import MovieCardImage from "./MovieCardImage";
import MovieCardContent from "./MovieCardContent";

interface MovieCardProps {
    thumbnail_path: string;
}

const MovieCard = ({ thumbnail_path }: MovieCardProps) => {
    const width = (number: number) => {
        return `w-[calc((100%/${number})-1rem)]`;
    };

    return (
        <>
            <div
                className={`group relative cursor-pointer aspect-card transition-all duration-300 md:shrink-0 md:${width(
                    3
                )} md:hover:scale-[.95] xl:${width(5)}`}
            >
                <MovieCardImage thumbnail_path={thumbnail_path} />
                <MovieCardContent />
            </div>
        </>
    );
};

export default MovieCard;
