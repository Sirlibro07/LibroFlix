import React, { useState } from "react";
import AppLayout from "@/Layouts/AppLayout";
import { Head } from "@inertiajs/react";
import AccountOptionsList from "@/Components/AccountOptionsList";
import AccountCurrentOption from "@/Components/AccountCurrentOption";
import AccountHeader from "@/Components/AccountHeader";

const Account = ({ status, has_verified_email }) => {
    const [currentOption, setCurrentOption] = useState("Profile");

    return (
        <AppLayout className="pt-8" footer_className="mt-[25rem]">
            <Head title="Profile" />
            <AccountHeader />
            <AccountOptionsList
                currentOption={currentOption}
                setCurrentOption={setCurrentOption}
            />
            <AccountCurrentOption
                currentOption={currentOption}
                status={status}
                has_verified_email={has_verified_email}
            />
        </AppLayout>
    );
};

export default Account;
