import HomeContent from "@/Components/HomeContent";
import MoviesContext from "@/Contexts/MoviesContext";
import AppLayout from "@/Layouts/AppLayout";
import React from "react";

const Home = ({ auth, isLoggedIn, movies }) => {
    console.log(movies);

    return (
        <AppLayout
            user={auth.user}
            isLoggedIn={isLoggedIn}
            bg_image={true}
            border={false}
        >
            <MoviesContext.Provider value={movies}>
                <HomeContent />
            </MoviesContext.Provider>
        </AppLayout>
    );
};

export default Home;
