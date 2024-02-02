import MovieContext from "@/Contexts/MovieContext";
import React, { useContext } from "react";

const MoviePageContent = () => {
    const movie = useContext(MovieContext).data;

    console.log(movie);

    return <h1>ciao</h1>;
};

export default MoviePageContent;
