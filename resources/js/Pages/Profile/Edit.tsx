import AppLayout from "@/Layouts/AppLayout";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformation";
import { Head } from "@inertiajs/react";
import React, { useState } from "react";
import OptionsList from "@/Components/OptionsList";
import LogoutForm from "@/Components/LogoutForm";

export default function Edit({ auth, mustVerifyEmail, status, isLoggedIn }) {
    const [currentOption, setCurrentOption] = useState("Profile");

    const renderCurrentOption = () => {
        switch (currentOption) {
            case "Profile":
                return (
                    <>
                        <UpdateProfileInformationForm />
                        <LogoutForm />
                    </>
                );
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
                <header className="font-display text-mobile_h1 ">
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
        </>
    );
}
