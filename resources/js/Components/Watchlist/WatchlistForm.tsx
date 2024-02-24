import scrollToTop from "@/Helpers/functions/global/scrollToTop";
import { router } from "@inertiajs/react";
import React, { ReactNode } from "react";

export interface WatchlistFormProps {
    children: ReactNode;
    watchlisted: boolean;
    slug: string;
    className?: string;
}

const WatchlistForm = ({
    children,
    watchlisted,
    slug,
    className = "",
}: WatchlistFormProps) => {
    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        watchlisted
            ? router.delete(route("watchlist_items.destroy", slug))
            : router.post(route("watchlist_items.store", slug));

        scrollToTop(400);
    };
    return (
        <form onSubmit={submitHandler} className={className}>
            {children}
        </form>
    );
};

export default WatchlistForm;
