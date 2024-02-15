import React, { useContext } from "react";
import MovieImg from "./MovieImg";
import MovieBlur from "./MovieBlur";
import MovieDetails, { MovieDetailsProps } from "./MovieDetails";
import MoviesContext from "@/Contexts/MoviesContext";
import MovieType from "@/Shared/Types/MovieType";

interface MovieContentProps extends Pick<MovieDetailsProps, "watchlisted"> {}

const MovieContent = ({ watchlisted }: MovieContentProps) => {
    const movie: MovieType = useContext(MoviesContext).data;

    return (
        <>
            <MovieBlur />
            <div className="relative mb-8 body-padding py-4 h-fit mt-[21.875rem]   bg-black rounded-tl-[1.563rem] rounded-tr-[1.563rem] md:flex md:items-start md:rounded-none md:mt-[-1.25rem]">
                <MovieImg title={movie.title} />

                <MovieDetails
                    watchlisted={watchlisted}
                    id={movie.id}
                    title={movie.title}
                    description={movie.description}
                    rating={movie.rating}
                    date={movie.year}
                />
            </div>
        </>
    );
};

export default MovieContent;
