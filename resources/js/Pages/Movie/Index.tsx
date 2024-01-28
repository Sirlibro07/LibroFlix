import MoviesIndexContent from "@/Components/MoviesIndexContent";
import AppLayout from "@/Layouts/AppLayout";
import React from "react";

const Index = ({ auth, isLoggedIn }) => {
    return (
        <AppLayout user={auth.user} isLoggedIn={isLoggedIn} bg_image={true}>
            <MoviesIndexContent />
        </AppLayout>
    );
};

export default Index;
