import { createContext } from "react";
import MovieType from "@/Shared/Types/MovieType";

interface MovieContextType {
    data: MovieType;
}

const MoviesContext = createContext<MovieContextType | undefined>(undefined);

export default MoviesContext;
