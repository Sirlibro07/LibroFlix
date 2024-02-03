import MovieContext from "@/Contexts/MovieContext";
import React, { useContext } from "react";
import MovieTitle from "./MovieTitle";
import MovieInfo from "./MovieInfo";
import MovieRating from "./MovieRating";
import MovieDescription from "./MovieDescription";
import MovieCard from "./MovieCard";
import Button from "./Button";
import ButtonWithIcon from "./ButtonWithIcon";

const MoviePageContent = () => {
    const movie = useContext(MovieContext).data;

    return (
        <div className="body-padding py-4 h-fit mt-[350px] bg-black rounded-tl-[25px] rounded-tr-[25px] md:flex md:items-start md:rounded-none">
            <MovieCard title={movie.title} />
            <div>
                <MovieTitle
                    title={movie.title}
                    version={movie.version}
                    className="text-typescale_33_px"
                />
                <MovieInfo date={movie.year} />
                <MovieRating rating={movie.rating} className={"mb-6"} />
                <Button className="bg-brand w-full md:hidden">Watch Now</Button>
                <ButtonWithIcon icon="play" className="hidden md:block">
                    Play
                </ButtonWithIcon>
                <MovieDescription
                    description={movie.description}
                    className="max-w-[90ch]"
                />
            </div>
        </div>
    );
};

export default MoviePageContent;
