import React, { useContext } from "react";
MovieTitle;
import MovieInfo from "../Movie/MovieInfo";
import MovieDescription from "../Movie/MovieDescription";
import MovieTitle from "../Movie/MovieTitle";
import MovieRating from "../Movie/MovieRating";
import MoviesContext from "@/Contexts/MoviesContext";
import Actions from "../Movie/Actions";

const FirstMovie = () => {
    const movie = useContext(MoviesContext).data[3];

    return (
        <div className="text-center z-1 md:text-start mb-16 md:mb-[7.5rem]   ">
            <MovieTitle
                title={`Naruto Shippuden:\n${movie.title}`}
                className="text-typescale_38px whitespace-pre-line md:text-typescale_67px md:leading-[120%]"
            />
            <MovieRating
                rating={movie.rating}
                className="hidden md:flex my-2"
            />
            <MovieInfo
                date={movie.year}
                className="mt-2 justify-center md:hidden"
            />
            <MovieDescription
                className="mb-4 line-clamp-2 md:line-clamp-3 max-w-[70ch]"
                description={movie.description}
                description_p={false}
            />
            <Actions
                button="learn"
                watchlisted={movie.watchlisted}
                slug={movie.slug}
            />
        </div>
    );
};

export default FirstMovie;
