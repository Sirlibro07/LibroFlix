import React from "react";
import MovieTitle from "./MovieTitle";
import MovieInfo from "./MovieInfo";
import MovieRating from "./MovieRating";
import MovieLinks, { MovieLinksProps } from "./MovieLinks";
import MovieDescription from "./MovieDescription";
import MovieType from "@/Shared/Types/MovieType";

export interface MovieDetailsProps
    extends Pick<MovieLinksProps, "watchlisted"> {
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
            <MovieLinks watchlisted={watchlisted} slug={movie.slug} />
            <MovieDescription
                description={movie.description}
                className="max-w-[90ch]"
            />
        </div>
    );
};

export default MovieDetails;
