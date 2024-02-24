import React, { useContext } from "react";
MovieTitle;
import MovieInfo from "../Movie/MovieInfo";
import MovieDescription from "../Movie/MovieDescription";
import MovieTitle from "../Movie/MovieTitle";
import MovieRating from "../Movie/MovieRating";
import FirstMovieLinks from "./FirstMovieLinks";
import MoviesContext from "@/Contexts/MoviesContext";
import MoviePlayButton from "../Movie/MoviePlayButton";
import MovieWatchlistForm from "../Movie/MovieWatchlistForm";

const FirstMovie = () => {
    const forth_movie = useContext(MoviesContext).data[3];

    return (
        <div className="text-center z-1 md:text-start mb-16 md:mb-[7.5rem]   ">
            <MovieTitle
                title={`Naruto Shippuden:\n${forth_movie.title}`}
                className="text-typescale_38px whitespace-pre-line md:text-typescale_67px md:leading-[120%]"
            />
            <MovieRating
                rating={forth_movie.rating}
                className="hidden md:flex my-2"
            />
            <MovieInfo
                date={forth_movie.year}
                className="mt-2 justify-center md:hidden"
            />
            <MovieDescription
                className="mb-4 line-clamp-2 md:line-clamp-3 max-w-[70ch]"
                description={forth_movie.description}
                description_p={false}
            />
            <MoviePlayButton slug={forth_movie.slug} />
        </div>
    );
};

export default FirstMovie;
