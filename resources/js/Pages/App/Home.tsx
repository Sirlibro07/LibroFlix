import HomeContent from "@/Components/HomeContent";
import MoviesContext from "@/Contexts/MoviesContext";
import AppLayout from "@/Layouts/AppLayout";
import React, { ReactNode } from "react";

const Home = ({ auth, isLoggedIn, movies }) => {
    console.log(movies);

    const renderHomeContent = (children: ReactNode) => {
        return (
            <AppLayout
                user={auth.user}
                isLoggedIn={isLoggedIn}
                bg_image={true}
                border={false}
            >
                <MoviesContext.Provider value={movies}>
                    {children}
                </MoviesContext.Provider>
            </AppLayout>
        );
    };

    return (
        <>
            {renderHomeContent(
                <>
                    <HomeContent />
                </>
            )}
        </>
    );
};

export default Home;
