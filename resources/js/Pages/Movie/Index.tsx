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
            {/* <BackgroundImage
                picture_classes="w-full top-[5.625rem] h-[627px] z-[0] sm:h-[48.75rem]"
                img_function={img}
            /> */}

            <img
                src="http://127.0.0.1:8000/storage/images/backgrounds/movies/tablet.webp"
                className="absolute left-0 w-full"
            />

            <div className="absolute left-0 w-full text-white mt-[180px]">
                <FirstMovie />
            </div>
        </AppLayout>
    );
};

export default Index;
