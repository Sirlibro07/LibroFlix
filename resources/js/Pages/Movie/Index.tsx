import MoviesIndexContent from "@/Components/MoviesIndexContent";
import getBackgroundImg from "@/Helpers/getBackgroundImg";
import AppLayout from "@/Layouts/AppLayout";
import React from "react";

const Index = ({ auth, isLoggedIn }) => {
    const img = (version: string) => {
        return getBackgroundImg("movies", version);
    };

    return (
        <AppLayout user={auth.user} isLoggedIn={isLoggedIn}>
            <MoviesIndexContent img={img} />
        </AppLayout>
    );
};

export default Index;
