import React, { useState } from "react";
import AppLayout from "@/Layouts/AppLayout";
import AccountOptionsList from "@/Components/Account/AccountOptionsList";
import AccountCurrentOption from "@/Components/Account/AccountCurrentOption";

const Account = ({ status, has_verified_email }) => {
    const [currentOption, setCurrentOption] = useState("Profile");

    return (
        <AppLayout
            className="pt-8"
            footer_className="mt-[25rem]"
            header_name="Account"
        >
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
