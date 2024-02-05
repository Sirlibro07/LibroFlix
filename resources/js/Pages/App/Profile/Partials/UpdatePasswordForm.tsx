import { useForm } from "@inertiajs/react";
import ProfileForm from "@/Components/ProfileForm";
import FormInputField from "@/Components/FormInputField";
import React from "react";

export default function UpdatePasswordForm() {
    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_password: "",
        password: "",
        password_confirmation: "",
    });

    return (
        <ProfileForm
            method_function={put}
            route_name="password.update"
            processing={processing}
            recentlySuccessful={recentlySuccessful}
        >
            <FormInputField
                name={"Current Password"}
                value={data.current_password}
                type="password"
                errors_field={errors.current_password}
                icon="lock"
                setData={setData}
                state_name={"current_password"}
            />
            <FormInputField
                name={"password"}
                value={data.password}
                errors_field={errors.password}
                icon="lock"
                setData={setData}
            />
            <FormInputField
                name={"Password Confirmation"}
                value={data.password_confirmation}
                type="password"
                errors_field={errors.password_confirmation}
                icon="lock"
                setData={setData}
                state_name={"password_confirmation"}
            />
        </ProfileForm>
    );
}
