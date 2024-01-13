import getImg from "@/Helpers/getImg";
import AppLayout from "@/Layouts/AppLayout";
import React from "react";

const Index = ({ auth, isLoggedIn }) => {
    const img = (version: string) => {
        return getImg("movies", version);
    };
    return (
        <AppLayout user={auth.user} isLoggedIn={isLoggedIn}>
            <img alt="background-image" src={img("desktop")} decoding="async" />
        </AppLayout>
    );
};

export default Index;
