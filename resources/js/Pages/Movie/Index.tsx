import BackgroundImage from "@/Components/BackgroundImage";
import FirstMovieDescription from "@/Components/FirstMovieDescription";
import getBackgroundImg from "@/Helpers/getBackgroundImg";
import AppLayout from "@/Layouts/AppLayout";
import React from "react";

const Index = ({ auth, isLoggedIn }) => {
    const img = (version: string) => {
        return getBackgroundImg("movies", version);
    };
    return (
        <AppLayout user={auth.user} isLoggedIn={isLoggedIn}>
            <BackgroundImage
                picture_classes="w-full h-full z-[0] sm:h-[48.75rem]"
                img_function={img}
            />
            <div className="absolute z-1">
                <FirstMovieDescription />
            </div>
        </AppLayout>
    );
};

export default Index;
