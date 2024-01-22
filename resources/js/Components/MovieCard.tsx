import React from "react";
import MovieCardImage from "./MovieCardImage";
import MovieCardContent from "./MovieCardContent";
import { Link } from "@inertiajs/react";

interface MovieCardProps {
    thumbnail_path: string;
}

const MovieCard = ({ thumbnail_path }: MovieCardProps) => {
    const width = (number: number) => {
        return `w-[calc((100%/${number})-1rem)]`;
    };

    return (
        <>
            <Link
                className={`group relative cursor-pointer aspect-card transition-all duration-300 md:shrink-0  md:${width(
                    3
                )} md:hover:scale-[.95] xl:${width(5)}`}
                href={""}
            >
                <MovieCardImage thumbnail_path={thumbnail_path} />
                <MovieCardContent />
            </Link>
        </>
    );
};

export default MovieCard;
