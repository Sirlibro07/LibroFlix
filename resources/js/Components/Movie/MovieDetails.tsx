import React from "react";
import MovieTitle from "./MovieTitle";
import MovieInfo, { MovieInfoProps } from "./MovieInfo";
import MovieRating, { MovieRatingProps } from "./MovieRating";
import MovieButtons, { MovieButtonsProps } from "./MovieButtons";
import MovieDescription, { MovieDescriptionProps } from "./MovieDescription";

interface MovieDetailsProps
    extends MovieDescriptionProps,
        MovieButtonsProps,
        Omit<MovieRatingProps, "className">,
        Omit<MovieInfoProps, "className"> {}
const MovieDetails = ({
    title,
    date,
    rating,
    description,
}: MovieDetailsProps) => {
    return (
        <div>
            <MovieTitle
                title={title}
                className="text-typescale_33_px md:text-typescale-50px md:whitespace-normal"
            />
            <MovieInfo date={date} />
            <MovieRating rating={rating} className={"mb-6 md:mb-5"} />
            <MovieButtons title={title} />
            <MovieDescription
                description={description}
                className="max-w-[90ch]"
            />
        </div>
    );
};

export default MovieDetails;