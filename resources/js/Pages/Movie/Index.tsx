import MoviesIndexContent from "@/Components/MoviesIndexContent";
import MoviesContext from "@/Contexts/MoviesContext";
import AppLayout from "@/Layouts/AppLayout";
import React from "react";

const Index = ({ auth, isLoggedIn, movies }) => {
    console.log(movies);

    return (
        <AppLayout
            user={auth.user}
            isLoggedIn={isLoggedIn}
            bg_image={true}
            border={false}
        >
            <MoviesContext.Provider value={movies}>
                <MoviesIndexContent />
            </MoviesContext.Provider>
        </AppLayout>
    );
};

export default Index;
