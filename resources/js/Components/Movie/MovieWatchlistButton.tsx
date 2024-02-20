import React from "react";
import ButtonWithIcon from "../Button/ButtonWithIcon";
import { router } from "@inertiajs/react";
import scrollToTop from "@/Shared/functions/scrollToTop";

export interface MovieWatchlistButtonProps {
    watchlisted: boolean;
    slug: string;
}

const MovieWatchlistButton = ({
    watchlisted,
    slug,
}: MovieWatchlistButtonProps) => {
    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        watchlisted
            ? router.delete(route("watchlist_items.destroy", slug))
            : router.post(route("watchlist_items.store", slug));

        scrollToTop(400);
    };

    return (
        <form onSubmit={submitHandler}>
            <ButtonWithIcon
                type="submit"
                className="bg-dark"
                icon_type="solid"
                icon_name={watchlisted ? "bookmark" : "plus"}
            >
                {watchlisted ? "Added to Watchlist" : "Add to Watchlist"}
            </ButtonWithIcon>
        </form>
    );
};

export default MovieWatchlistButton;
