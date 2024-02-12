import React from "react";
import MovieTitle from "./MovieTitle";
import MovieInfo from "./MovieInfo";
import MovieRating from "./MovieRating";
import MovieButtons from "./MovieButtons";
import MovieDescription from "./MovieDescription";
import MovieType from "@/Shared/interfaces/MovieType";

const MovieDetails = ({
    title,
    year,
    rating,
    description,
}: Omit<MovieType, "id">) => {
    return (
        <div>
            <MovieTitle
                title={title}
                className="text-typescale_33_px md:text-typescale-50px md:whitespace-normal"
            />
            <MovieInfo date={year} />
            <MovieRating rating={rating} className={"mb-6 md:mb-5"} />
            <MovieButtons />
            <MovieDescription
                description={description}
                className="max-w-[90ch]"
            />
        </div>
    );
};

export default MovieDetails;
