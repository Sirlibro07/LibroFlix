import BackgroundImage from "@/Components/BackgroundImage";
import FirstMovie from "@/Components/FirstMovie";
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

            <div className="absolute left-0 w-full text-white mt-[180px]">
                <FirstMovie />
            </div>
        </AppLayout>
    );
};

export default Index;
