import Grid from "@/Components/Grid/Grid";
import AppLayout from "@/Layouts/AppLayout";
import MovieResourceType from "@/Helpers/Types/MovieResourceType";
import MovieType from "@/Helpers/Types/MovieType";
import React, { useMemo } from "react";

interface WatchlistProps {
    watchlist_items: MovieResourceType<MovieType[]>;
}

const Watchlist = ({ watchlist_items }: WatchlistProps) => {
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
            Heading_name="Watchlist"
            Heading_className="mb-5"
        >
            <Grid movies={movies}></Grid>
        </AppLayout>
    );
};

export default Watchlist;
