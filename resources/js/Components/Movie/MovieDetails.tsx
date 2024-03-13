import React from "react";
import MovieTitle from "./MovieTitle";
import MovieInfo from "./MovieInfo";
import MovieRating from "./MovieRating";
import MovieDescription from "./MovieDescription";
import MovieType from "@/Helpers/Types/MovieType";
import MovieActions from "./MovieActions";
import WatchlistIconAction from "../Watchlist/WatchlistIconAction";

export interface MovieDetailsProps {
    movie: MovieType;
}
const MovieDetails = ({ movie }: MovieDetailsProps) => {
    return (
        <div>
            <div className=" flex justify-between">
                <MovieTitle
                    title={movie.title}
                    className="mr-4 text-typescale_33_px md:text-typescale-50px md:whitespace-normal"
                />
                <WatchlistIconAction
                    slug={movie.slug}
                    watchlisted={movie.watchlisted}
                />
            </div>
            <MovieInfo date={movie.year} />
            <MovieRating rating={movie.rating} className={"mb-6 md:mb-5"} />
            <MovieActions
                button="play"
                slug={movie.slug}
                watchlisted={movie.watchlisted}
            />
            <MovieDescription
                description={movie.description}
                className="max-w-[90ch]"
            />
        </div>
    );
};

export default MovieDetails;
