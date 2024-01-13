import AppLayout from "@/Layouts/AppLayout";
import React from "react";

const Index = ({ auth, isLoggedIn }) => {
    return (
        <AppLayout user={auth.user} isLoggedIn={isLoggedIn}>
            <></>
        </AppLayout>
    );
};

export default Index;
