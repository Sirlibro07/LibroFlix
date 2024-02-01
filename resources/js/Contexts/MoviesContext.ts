import { createContext } from "react";
import MovieType from "@/Helpers/interfaces/MovieType";

interface MoviesContextType {
    data: MovieType[];
}

const MoviesContext = createContext<MoviesContextType | undefined>(undefined);

export default MoviesContext;
