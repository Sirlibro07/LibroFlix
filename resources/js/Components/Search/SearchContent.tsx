import MoviesContext from "@/Contexts/MoviesContext";
import React, { useContext } from "react";
import Grid from "../Grid/Grid";
import SearchBar from "../SearchBar/SearchBar";

const SearchContent = () => {
    const movies = useContext(MoviesContext).data;

    return (
        <div className="flex flex-col items-center">
            <SearchBar className="mb-[50px] lg:mb-[70px] lg:w-[700px]" />
            <Grid movies={movies} />
        </div>
    );
};

export default SearchContent;
