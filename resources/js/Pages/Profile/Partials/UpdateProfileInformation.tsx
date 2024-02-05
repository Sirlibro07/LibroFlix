import { useForm, usePage } from "@inertiajs/react";
import ProfileForm from "@/Components/ProfileForm";
import FormInputField from "@/Components/FormInputField";
import React, { useContext } from "react";
import UserContext from "@/Contexts/UserContext";

const UpdateProfileInformation = () => {
    {
        const user = useContext(UserContext);

        const { data, setData, patch, errors, processing, recentlySuccessful } =
            useForm({
                name: user.name,
                email: user.email,
            });

        return (
            <>
                <ProfileForm
                    method_function={patch}
                    route_name="profile.update"
                    processing={processing}
                    recentlySuccessful={recentlySuccessful}
                >
                    <FormInputField
                        input_name={"name"}
                        type={"text"}
                        state_field={data.name}
                        errors_field={errors.name}
                        icon="lock"
                        setData={setData}
                    />

                    <FormInputField
                        input_name={"email"}
                        state_field={data.email}
                        errors_field={errors.email}
                        icon="envelope"
                        setData={setData}
                    />
                </ProfileForm>
            </>
        );
    }
};

export default UpdateProfileInformation;
