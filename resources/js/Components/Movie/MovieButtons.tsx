import React from "react";
import MovieWatchNowButton, {
    MovieWatchNowButtonProps,
} from "./MovieWatchNowButton";
import MovieWatchlistButton, {
    MovieWatchlistButtonProps,
} from "./MovieWatchlistButton";

export interface MovieButtonsProps
    extends MovieWatchNowButtonProps,
        MovieWatchlistButtonProps {}

const MovieButtons = ({ slug, id, watchlisted }: MovieButtonsProps) => {
    return (
        <div className="flex gap-3">
            <MovieWatchNowButton slug={slug} />
            <MovieWatchlistButton watchlisted={watchlisted} id={id} />
        </div>
    );
};

export default MovieButtons;
