import BackgroundImage from "@/Components/LayoutItems/BackgroundImage";
import HomeContent from "@/Components/Home/HomeContent";
import MoviesContext from "@/Contexts/MoviesContext";
import AppLayout from "@/Layouts/AppLayout";
import React, { ReactNode } from "react";
import MoviesResourceType from "@/Shared/Types/MoviesResourceType";

interface HomeProps {
    movies: MoviesResourceType;
}

const Home = ({ movies }: HomeProps) => {
    const renderHomeContent = (children: ReactNode) => {
        return (
            <AppLayout
                head_title="Home"
                bg_image={
                    <BackgroundImage
                        folder_name="first_movie"
                        picture_classes="w-full h-[44rem] opacity-[.85] z-[-1] top-navbar_height md:h-[48.75rem]"
                    />
                }
                navbar_border={false}
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
