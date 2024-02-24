import React from "react";
import MovieTitle from "./MovieTitle";
import MovieInfo from "./MovieInfo";
import MovieRating from "./MovieRating";
import MovieLinks from "./MovieLinks";
import MovieDescription from "./MovieDescription";
import MovieType from "@/Helpers/Types/MovieType";
import MovieActions from "./MovieActions";

export interface MovieDetailsProps {
    movie: MovieType;
}
const MovieDetails = ({ movie }: MovieDetailsProps) => {
    return (
        <div>
            <MovieTitle
                title={movie.title}
                className="text-typescale_33_px md:text-typescale-50px md:whitespace-normal"
            />
            <MovieInfo date={movie.year} />
            <MovieRating rating={movie.rating} className={"mb-6 md:mb-5"} />
            <MovieActions slug={movie.slug} watchlisted={movie.watchlisted} />
            <MovieDescription
                description={movie.description}
                className="max-w-[90ch]"
            />
        </div>
    );
};

export default MovieDetails;
