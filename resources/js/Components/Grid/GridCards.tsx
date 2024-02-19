import MovieType from "@/Shared/Types/MovieType";
import React from "react";
import GridCard, { GridCardProps } from "./GridCard";
import underscoreToSpace from "@/Shared/functions/underscoreToSpace";

export interface GridCardsProps
    extends Omit<GridCardProps, "thumbnail_path" | "title" | "slug"> {
    movies: MovieType[];
}

const GridCards = ({ movies }: GridCardsProps) => {
    return (
        <>
            {movies.map((movie) => (
                <GridCard
                    key={movie.id}
                    slug={movie.slug}
                    thumbnail_path={underscoreToSpace(movie.title)}
                />
            ))}
        </>
    );
};

export default GridCards;
