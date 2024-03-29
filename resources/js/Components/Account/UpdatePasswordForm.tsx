import { useForm } from "@inertiajs/react";
import ProfileForm from "@/Components/Account/ProfileForm";
import FormInputField from "@/Components/FormItems/FormInputField";
import React from "react";

export default function UpdatePasswordForm({ status }) {
    const { data, setData, errors, put, processing } = useForm({
        current_password: "",
        password: "",
        password_confirmation: "",
    });

    return (
        <ProfileForm
            method_function={put}
            route_name="password.update"
            processing={processing}
            status={status}
        >
            <FormInputField
                name={"Current Password"}
                value={data.current_password}
                type="password"
                message={errors.current_password}
                icon_name="lock"
                setData={setData}
                state_name={"current_password"}
            />
            <FormInputField
                name={"password"}
                value={data.password}
                message={errors.password}
                icon_name="lock"
                setData={setData}
            />
            <FormInputField
                name={"Password Confirmation"}
                value={data.password_confirmation}
                type="password"
                message={errors.password_confirmation}
                icon_name="lock"
                setData={setData}
                state_name={"password_confirmation"}
            />
        </ProfileForm>
    );
}
