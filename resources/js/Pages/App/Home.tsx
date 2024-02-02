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
                bg_image_className="w-full h-[44rem] md:h-[48.75rem] absolute top-[5.625rem] bottom-0 z-[-1]"
                bg_image_folder_name="first_movie"
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
