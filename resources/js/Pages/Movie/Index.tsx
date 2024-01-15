import BackgroundImage from "@/Components/BackgroundImage";
import FirstMovie from "@/Components/FirstMovie";
import getBackgroundImg from "@/Helpers/getBackgroundImg";
import AppLayout from "@/Layouts/AppLayout";
import React, { useContext } from "react";

const Index = ({ auth, isLoggedIn }) => {
    const img = (version: string) => {
        return getBackgroundImg("movies", version);
    };

    return (
        <AppLayout user={auth.user} isLoggedIn={isLoggedIn}>
            <BackgroundImage
                picture_classes="w-full top-[5.625rem] h-[627px] z-[-1] sm:h-[48.75rem]"
                img_function={img}
            />

            <div className="w-full text-white">
                <FirstMovie />
            </div>
        </AppLayout>
    );
};

export default Index;
