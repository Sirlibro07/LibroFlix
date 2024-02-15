import React from "react";
import ButtonWithIcon from "../Button/ButtonWithIcon";
import { router } from "@inertiajs/react";

export interface MovieWatchlistButtonProps {
    watchlisted: boolean;
    id: number;
}

const MovieWatchlistButton = ({
    watchlisted,
    id,
}: MovieWatchlistButtonProps) => {
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        watchlisted
            ? router.delete(route("watchlist_items.destroy", id), {
                  preserveScroll: true,
              })
            : router.post(route("watchlist_items.store", id), {
                  preserveScroll: true,
              });
    };

    return (
        <form onSubmit={submitHandler}>
            <ButtonWithIcon
                type="submit"
                className="bg-dark"
                icon_type="solid"
                icon_name="plus"
            >
                Add to Watchlist
            </ButtonWithIcon>
        </form>
    );
};

export default MovieWatchlistButton;
