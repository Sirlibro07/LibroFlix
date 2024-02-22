import { createContext } from "react";
import MovieType from "@/Helpers/Types/MovieType";

export interface MoviesContextProps {
    data: MovieType[];
}

const MoviesContext = createContext<MoviesContextProps | undefined>(undefined);

export default MoviesContext;
