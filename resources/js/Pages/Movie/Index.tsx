import BackgroundImage from "@/Components/BackgroundImage";
import getImg from "@/Helpers/getImg";
import AppLayout from "@/Layouts/AppLayout";
import React from "react";

const Index = ({ auth, isLoggedIn }) => {
    const img = (version: string) => {
        return getImg("movies", version);
    };
    return (
        <AppLayout user={auth.user} isLoggedIn={isLoggedIn}>
            <BackgroundImage img_function={img} img_classes={""} />
        </AppLayout>
    );
};

export default Index;
