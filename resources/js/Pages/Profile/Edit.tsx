import AppLayout from "@/Layouts/AppLayout";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformation";
import { Head } from "@inertiajs/react";
import React, { useState } from "react";
import OptionsList from "@/Components/OptionsList";

export default function Edit({ auth, mustVerifyEmail, status, isLoggedIn }) {
    const [currentOption, setCurrentOption] = useState("Profile");

    const renderCurrentOption = () => {
        switch (currentOption) {
            case "Profile":
                return <UpdateProfileInformationForm />;
            case "Password":
                return <UpdatePasswordForm />;
            case "Other":
                return <DeleteUserForm />;
        }
    };

    return (
        <>
            <AppLayout
                user={auth.user}
                isLoggedIn={isLoggedIn}
                className="pt-8"
            >
                <Head title="Profile" />
                <header className="font-display text-mobile_h1 text-contrast">
                    Account
                </header>

                <OptionsList
                    options={[
                        { name: "Profile" },
                        { name: "Password" },
                        { name: "Other" },
                    ]}
                    currentOption={currentOption}
                    setCurrentOption={setCurrentOption}
                    ul_className="mt-8 mb-16"
                />

                {renderCurrentOption()}
            </AppLayout>
            <style>{`body {
    background-color: black;
}`}</style>
        </>
    );
}
