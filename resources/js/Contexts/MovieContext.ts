import { createContext } from "react";
import MovieType from "@/Shared/interfaces/MovieType";

interface MovieContextType {
    data: MovieType;
}

const MoviesContext = createContext<MovieContextType | undefined>(undefined);

export default MoviesContext;
