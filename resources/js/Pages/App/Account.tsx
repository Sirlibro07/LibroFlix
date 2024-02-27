import React, { useState } from "react";
import AppLayout from "@/Layouts/AppLayout";
import AccountOptionsList from "@/Components/Account/AccountOptionsList";
import AccountCurrentOption, {
    AccountCurrentOptionProps,
} from "@/Components/Account/AccountCurrentOption";
import alertMessage from "@/Helpers/functions/error/alertMessage";

interface AccountProps extends AccountCurrentOptionProps {}

const Account = ({ status, has_verified_email }: AccountProps) => {
    const [currentOption, setCurrentOption] = useState("Profile");

    alertMessage();

    return (
        <AppLayout head_title="Account" Heading_name="Account">
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
