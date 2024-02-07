import FirstMovieBackgroundImage from "@/Components/FirstMovieBackgroundImage";
import HomeContent from "@/Components/HomeContent";
import MoviesContext from "@/Contexts/MoviesContext";
import AppLayout from "@/Layouts/AppLayout";
import React, { ReactNode } from "react";

const Home = ({ auth, movies }) => {
    console.log(movies);

    const renderHomeContent = (children: ReactNode) => {
        return (
            <AppLayout
                user={auth.user}
                bg_image={<FirstMovieBackgroundImage />}
                border={false}
            >
                <MoviesContext.Provider value={movies}>
                    {children}
                </MoviesContext.Provider>
            </AppLayout>
        );
    };

    return <>{renderHomeContent(<HomeContent />)}</>;
};

export default Home;
