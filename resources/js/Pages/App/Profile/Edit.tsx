import AppLayout from "@/Layouts/AppLayout";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformation";
import { Head } from "@inertiajs/react";
import React, { useState } from "react";
import OptionsList from "@/Components/OptionsList";
import LogoutForm from "@/Components/LogoutForm";

export default function Edit({ status }) {
    const [currentOption, setCurrentOption] = useState("Profile");

    const [message, setMessage] = useState<string>(status);

    const renderCurrentOption = () => {
        switch (currentOption) {
            case "Profile":
                return (
                    <>
                        <UpdateProfileInformationForm
                            status={message}
                            setMessage={setMessage}
                        />
                        <LogoutForm />
                    </>
                );
            case "Password":
                return <UpdatePasswordForm status={message} />;
            case "Other":
                return <DeleteUserForm />;
        }
    };

    return (
        <AppLayout className="pt-8" footer_className="mt-[25rem]">
            <Head title="Profile" />
            <header className="font-display text-typescale_38px ">
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
    );
}
