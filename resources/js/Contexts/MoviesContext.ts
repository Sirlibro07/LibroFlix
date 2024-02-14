import { createContext } from "react";
import MovieType from "@/Shared/Types/MovieType";

interface MoviesContextProps {
    data: MovieType[];
}

const MoviesContext = createContext<MoviesContextProps | undefined>(undefined);

export default MoviesContext;
