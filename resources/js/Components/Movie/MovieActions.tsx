import React from "react";
import MoviePlayButton from "./MoviePlayButton";
import MovieWatchlistForm, {
    MovieWatchlistFormProps,
} from "./MovieWatchlistForm";

interface MovieActionsProps extends MovieWatchlistFormProps {}

const MovieActions = ({ slug, watchlisted }: MovieActionsProps) => {
    return (
        <div className="flex gap-3">
            <MoviePlayButton slug={slug} />
            <MovieWatchlistForm watchlisted={watchlisted} slug={slug} />
        </div>
    );
};

export default MovieActions;
