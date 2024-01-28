import React from "react";
import MovieCardImage from "./MovieCardImage";
import MovieCardContent from "./MovieCardContent";
import { Link } from "@inertiajs/react";

interface MovieCardProps {
    thumbnail_path: string;
}

const MovieCard = ({ thumbnail_path }: MovieCardProps) => {
    return (
        <>
            <Link
                className={`group relative cursor-pointer aspect-card transition-all duration-300 
                md:hover:scale-95 lg:shrink-0 lg:w-[calc(20%-1rem)] `}
                href={""}
            >
                <MovieCardImage thumbnail_path={thumbnail_path} />
                <MovieCardContent />
            </Link>
        </>
    );
};

export default MovieCard;
