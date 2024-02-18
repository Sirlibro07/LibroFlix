import React from "react";
import MovieTitle from "./MovieTitle";
import MovieInfo from "./MovieInfo";
import MovieRating from "./MovieRating";
import MovieButtons, { MovieButtonsProps } from "./MovieButtons";
import MovieDescription from "./MovieDescription";
import MovieType from "@/Shared/Types/MovieType";

export interface MovieDetailsProps
    extends Pick<MovieButtonsProps, "watchlisted"> {
    movie: MovieType;
}
const MovieDetails = ({ movie, watchlisted }: MovieDetailsProps) => {
    return (
        <div>
            <MovieTitle
                title={movie.title}
                className="text-typescale_33_px md:text-typescale-50px md:whitespace-normal"
            />
            <MovieInfo date={movie.year} />
            <MovieRating rating={movie.rating} className={"mb-6 md:mb-5"} />
            <MovieButtons
                watchlisted={watchlisted}
                id={movie.id}
                slug={movie.slug}
            />
            <MovieDescription
                description={movie.description}
                className="max-w-[90ch]"
            />
        </div>
    );
};

export default MovieDetails;
