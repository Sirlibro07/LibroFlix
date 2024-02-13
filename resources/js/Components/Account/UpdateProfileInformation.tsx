import { router, useForm } from "@inertiajs/react";
import ProfileForm from "@/Components/Account/ProfileForm";
import FormInputField from "@/Components/FormItems/FormInputField";
import React, { useContext } from "react";
import UserContext from "@/Contexts/UserContext";

export interface UpdateProfileInformationProps {
    status: string;
    has_verified_email: boolean;
}

const UpdateProfileInformation = ({
    status,
    has_verified_email,
}: UpdateProfileInformationProps) => {
    {
        const user = useContext(UserContext);

        const { data, setData, patch, errors, processing } = useForm({
            name: user.name,
            email: user.email,
        });

        const buttonOnClickhandler = () => {
            router.post(route("verification.send"));
        };

        return (
            <>
                <ProfileForm
                    method_function={patch}
                    route_name="profile.update"
                    processing={processing}
                    status={status}
                >
                    <FormInputField
                        name={"name"}
                        value={data.name}
                        type={"text"}
                        message={errors.name}
                        icon_name="lock"
                        setData={setData}
                    />

                    <FormInputField
                        name={"email"}
                        value={data.email}
                        message={errors.email}
                        icon_name="envelope"
                        setData={setData}
                        className="inline w-[5px]"
                        button={has_verified_email ? false : true}
                        button_title="Verify"
                        button_onClickHandler={buttonOnClickhandler}
                    />
                </ProfileForm>
            </>
        );
    }
};

export default UpdateProfileInformation;
