import React from "react";
import DeleteUserForm from "@/Components/Account/DeleteUserForm";
import UpdatePasswordForm from "@/Components/Account/UpdatePasswordForm";
import UpdateProfileInformationForm, {
    UpdateProfileInformationProps,
} from "@/Components/Account/UpdateProfileInformation";
import LogoutForm from "@/Components/Account/LogoutForm";

interface AccountCurrentOptionProps extends UpdateProfileInformationProps {
    currentOption: string;
}

const AccountCurrentOption = ({
    currentOption,
    status,
    has_verified_email,
}: AccountCurrentOptionProps) => {
    const renderCurrentOption = () => {
        switch (currentOption) {
            case "Profile":
                return (
                    <>
                        <UpdateProfileInformationForm
                            has_verified_email={has_verified_email}
                            status={status}
                        />
                        <LogoutForm />
                    </>
                );
            case "Password":
                return <UpdatePasswordForm status={status} />;
            case "Other":
                return <DeleteUserForm />;
        }
    };
    return <>{renderCurrentOption()}</>;
};

export default AccountCurrentOption;
