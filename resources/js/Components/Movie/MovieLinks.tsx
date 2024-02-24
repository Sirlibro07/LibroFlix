import React from "react";
import MoviePlayButton from "./MoviePlayButton";
import MovieWatchlistForm, {
    MovieWatchlistFormProps,
} from "./MovieWatchlistForm";

interface MovieLinksProps extends MovieWatchlistFormProps {}

const MovieLinks = ({ slug, watchlisted }: MovieLinksProps) => {
    return (
        <div className="flex gap-3">
            <MoviePlayButton slug={slug} />
            <MovieWatchlistForm watchlisted={watchlisted} slug={slug} />
        </div>
    );
};

export default MovieLinks;
