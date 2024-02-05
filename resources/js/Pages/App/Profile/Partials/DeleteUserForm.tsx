import { useForm } from "@inertiajs/react";
import FormInputField from "@/Components/FormInputField";
import ProfileForm from "@/Components/ProfileForm";
import React from "react";

export default function DeleteUserForm() {
    const {
        data,
        setData,
        delete: destroy,
        processing,
        errors,
    } = useForm({
        password: "",
    });

    return (
        <>
            <ProfileForm
                method_function={destroy}
                route_name="profile.destroy"
                processing={processing}
                button_title="Delete Account"
                button_bg_color="bg-red"
            >
                <FormInputField
                    name={"password"}
                    value={data.password}
                    errors_field={errors.password}
                    icon="lock"
                    setData={setData}
                />
            </ProfileForm>
        </>
    );
}
