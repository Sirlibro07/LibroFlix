import { useEffect } from "react";
import AuthLayout from "@/Layouts/AuthLayout";
import { useForm } from "@inertiajs/react";
import React from "react";
import FormInputField from "@/Components/FormItems/FormInputField";

const ResetPassword = ({ id, token }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        id: id,
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    return (
        <AuthLayout
            folder_name={"forgot_reset_password"}
            img_classes="object-right"
            title="Reset Password"
            name="Reset Password"
            method_function={post}
            route_name="password.store"
            button_title="Reset Password"
            processing={processing}
        >
            <FormInputField
                name={"new password"}
                value={data.password}
                type="password"
                setData={setData}
                errors_field={errors.password}
                icon_name="lock"
                state_name="password"
            />

            <FormInputField
                name={"new password confirmation"}
                value={data.password_confirmation}
                type={"password"}
                state_name={"password_confirmation"}
                errors_field={errors.password_confirmation}
                icon_name="lock"
                setData={setData}
            />
        </AuthLayout>
    );
};

export default ResetPassword;
