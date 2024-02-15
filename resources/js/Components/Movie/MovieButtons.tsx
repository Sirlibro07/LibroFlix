import React from "react";
import MovieWatchNow, { MovieWatchNowProps } from "./MovieWatchNow";
import MovieWatchlistButton, {
    MovieWatchlistButtonProps,
} from "./MovieWatchlistButton";

export interface MovieButtonsProps
    extends MovieWatchNowProps,
        MovieWatchlistButtonProps {}

const MovieButtons = ({ title, id, watchlisted }: MovieButtonsProps) => {
    return (
        <div className="flex gap-3">
            <MovieWatchNow title={title} />
            <MovieWatchlistButton watchlisted={watchlisted} id={id} />
        </div>
    );
};

export default MovieButtons;
