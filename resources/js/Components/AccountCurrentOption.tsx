import React from "react";
import DeleteUserForm from "@/Components/DeleteUserForm";
import UpdatePasswordForm from "@/Components/UpdatePasswordForm";
import UpdateProfileInformationForm from "@/Components/UpdateProfileInformation";
import LogoutForm from "@/Components/LogoutForm";

const AccountCurrentOption = ({ currentOption, message }) => {
    const renderCurrentOption = () => {
        switch (currentOption) {
            case "Profile":
                return (
                    <>
                        <UpdateProfileInformationForm status={message} />
                        <LogoutForm />
                    </>
                );
            case "Password":
                return <UpdatePasswordForm status={message} />;
            case "Other":
                return <DeleteUserForm />;
        }
    };
    return <>{renderCurrentOption()}</>;
};

export default AccountCurrentOption;
