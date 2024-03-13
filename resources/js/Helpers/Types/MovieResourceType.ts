import MovieType from "./MovieType";

type MovieResourceType<T extends MovieType | MovieType[]> = { data: T };

export default MovieResourceType;
