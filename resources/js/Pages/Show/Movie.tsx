import AppLayout from "@/Layouts/AppLayout";
import React from "react";

export default function Movie({ auth, isLoggedIn, movie }) {
    console.log(movie.data);

    return (
        <AppLayout user={auth.user} isLoggedIn={isLoggedIn}>
            <h1>Movie</h1>
        </AppLayout>
    );
}
