import Grid from "@/Components/Grid/Grid";
import AppLayout from "@/Layouts/AppLayout";
import React, { useMemo } from "react";

const Watchlist = ({ watchlist }) => {
    const movies = useMemo(() => {
        const { watchlist_items } = watchlist.data;
        const movies = [];

        for (let i = 0; i < watchlist_items.length; i++) {
            movies[i] = watchlist_items[i].movie;
        }

        return movies;
    }, [watchlist]);

    return (
        <AppLayout>
            <h1 className="font-medium text-typescale_38px font-display mt-8 mb-5">
                WatchList
            </h1>
            <Grid movies={movies}></Grid>
        </AppLayout>
    );
};

export default Watchlist;
