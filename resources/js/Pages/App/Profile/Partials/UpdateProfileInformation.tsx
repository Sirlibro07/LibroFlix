import { router, useForm, usePage } from "@inertiajs/react";
import ProfileForm from "@/Components/ProfileForm";
import FormInputField from "@/Components/FormInputField";
import React, { useContext } from "react";
import UserContext from "@/Contexts/UserContext";
import Button from "@/Components/Button";

const UpdateProfileInformation = ({ status, setMessage }) => {
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
                    setMessage={setMessage}
                >
                    <FormInputField
                        name={"name"}
                        value={data.name}
                        type={"text"}
                        errors_field={errors.name}
                        icon_name="lock"
                        setData={setData}
                    />

                    <FormInputField
                        name={"email"}
                        value={data.email}
                        errors_field={errors.email}
                        icon_name="envelope"
                        setData={setData}
                        className="inline w-[5px]"
                    />
                    <Button
                        type="button"
                        onClick={buttonOnClickhandler}
                        className="bg_brand w-[70px] transitions hover:w-[90px] absolute right-0 mt-[-52px]"
                    >
                        Verify
                    </Button>
                </ProfileForm>
            </>
        );
    }
};

export default UpdateProfileInformation;
