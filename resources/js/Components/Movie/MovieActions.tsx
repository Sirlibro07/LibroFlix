import React from "react";
import MoviePlayButton from "./MoviePlayButton";
import MovieWatchlistForm, {
    MovieWatchlistFormProps,
} from "./MovieWatchlistForm";
import MovieLearnButton from "./MovieLearnButton";

interface MovieActionsProps extends MovieWatchlistFormProps {
    button: "learn" | "play";
}

const MovieActions = ({ button, slug, watchlisted }: MovieActionsProps) => {
    return (
        <div className="flex gap-2 lg:gap-3">
            {button == "play" ? (
                <MoviePlayButton
                    slug={slug}
                    className="w-full flex justify-center md:w-fit"
                    icon_className="hidden md:inline"
                />
            ) : (
                <MovieLearnButton slug={slug} />
            )}
            <MovieWatchlistForm
                watchlisted={watchlisted}
                slug={slug}
                className="hidden md:block"
            />
        </div>
    );
};

export default MovieActions;
