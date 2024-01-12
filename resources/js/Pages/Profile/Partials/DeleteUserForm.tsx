import { useRef, useState } from "react";
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
        reset,
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
                button_text="Delete Account"
                button_styles="bg-error_danger"
            >
                <FormInputField
                    name={"password"}
                    state_field={data.password}
                    errors_field={errors.password}
                    icon="lock"
                    setData={setData}
                />
            </ProfileForm>
            ;
        </>
    );
}
