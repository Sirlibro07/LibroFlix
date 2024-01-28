import { createContext } from "react";

interface MoviesContextType {
    data: {
        id: number;
        title: string;
        description: string;
        rating: number;
        year: number;
    }[];
}

const MoviesContext = createContext<MoviesContextType | undefined>(undefined);

export default MoviesContext;
