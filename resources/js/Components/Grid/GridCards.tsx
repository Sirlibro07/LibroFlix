import MovieType from "@/Helpers/Types/MovieType";
import React from "react";
import GridCard, { GridCardProps } from "./GridCard";
import underscoreToSpace from "@/Helpers/functions/global/underscoreToSpace";

export interface GridCardsProps {
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
