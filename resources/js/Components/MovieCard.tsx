import React from "react";
import MovieCardImage from "./MovieCardImage";
import MovieCardContent from "./MovieCardContent";
import { Link } from "@inertiajs/react";

interface MovieCardProps {
    thumbnail_path: string;
    version: string;
    title: string;
    id: number;
}

const MovieCard = ({ thumbnail_path, version, title, id }: MovieCardProps) => {
    return (
        <>
            <Link
                className={`group relative cursor-pointer aspect-card transition-all duration-300 
                md:hover:scale-95 lg:shrink-0 lg:w-[calc(20%-1rem)] `}
                href={""}
            >
                <MovieCardImage thumbnail_path={thumbnail_path} />
                <MovieCardContent version={version} title={title} id={id} />
            </Link>
        </>
    );
};

export default MovieCard;
