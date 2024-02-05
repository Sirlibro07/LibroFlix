import React, { useContext } from "react";
MovieTitle;
import MovieInfo from "./MovieInfo";
import MovieDescription from "./MovieDescription";
import MovieTitle from "./MovieTitle";
import MovieRating from "./MovieRating";
import FirstMovieLinks from "./FirstMovieLinks";
import MoviesContext from "@/Contexts/MoviesContext";

const FirstMovie = () => {
    const forth_movie = useContext(MoviesContext).data[3];

    return (
        <>
            <div className="text-center z-1 md:text-start mb-16 md:mb-[120px]   ">
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

                <FirstMovieLinks title={forth_movie.title} />
            </div>
        </>
    );
};

export default FirstMovie;
