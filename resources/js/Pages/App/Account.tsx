import React, { useState } from "react";
import AppLayout from "@/Layouts/AppLayout";
import { Head } from "@inertiajs/react";
import AccountOptionsList from "@/Components/AccountOptionsList";
import AccountCurrentOption from "@/Components/AccountCurrentOption";
import AccountHeader from "@/Components/AccountHeader";

const Account = ({ status }) => {
    console.log(status);

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
            />
        </AppLayout>
    );
};

export default Account;
