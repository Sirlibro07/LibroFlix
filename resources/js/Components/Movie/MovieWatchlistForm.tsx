import React from "react";
import ButtonWithIcon from "../Button/ButtonWithIcon";
import { router } from "@inertiajs/react";
import scrollToTop from "@/Helpers/functions/global/scrollToTop";

export interface MovieWatchlistFormProps {
    watchlisted: boolean;
    slug: string;
}

const MovieWatchlistForm = ({ watchlisted, slug }: MovieWatchlistFormProps) => {
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
                icon_type={watchlisted ? "solid" : "regular"}
                icon_name="bookmark"
            >
                {watchlisted ? "Added to Watchlist" : "Add to Watchlist"}
            </ButtonWithIcon>
        </form>
    );
};

export default MovieWatchlistForm;
