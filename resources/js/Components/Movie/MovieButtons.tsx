import React from "react";
import MovieWatchNowButton from "./MovieWatchNowButton";
import MovieWatchlistButton, {
    MovieWatchlistButtonProps,
} from "./MovieWatchlistButton";

export interface MovieButtonsProps extends MovieWatchlistButtonProps {}

const MovieButtons = ({ slug, watchlisted }: MovieButtonsProps) => {
    return (
        <div className="flex gap-3">
            <MovieWatchNowButton slug={slug} />
            <MovieWatchlistButton watchlisted={watchlisted} slug={slug} />
        </div>
    );
};

export default MovieButtons;
