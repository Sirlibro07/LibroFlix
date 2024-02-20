import Grid from "@/Components/Grid/Grid";
import AppLayout from "@/Layouts/AppLayout";
import React, { useMemo } from "react";

const Watchlist = ({ watchlist_items }) => {
    const movies = useMemo(() => {
        const { data } = watchlist_items;

        const movies = [];

        for (let i = 0; i < data.length; i++) {
            movies[i] = data[i];
        }

        return movies;
    }, [watchlist_items]);

    return (
        <AppLayout
            head_title="Watchlist"
            header_name="Watchlist"
            header_className="mt-8 mb-5"
        >
            <Grid movies={movies}></Grid>
        </AppLayout>
    );
};

export default Watchlist;
