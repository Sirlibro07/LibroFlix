import { useEffect } from "react";
import AuthLayout from "@/Layouts/AuthLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/react";
import React from "react";
import AuthForm from "@/Components/AuthForm";
import FormInputField from "@/Components/FormInputField";

export default function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
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
            media_query_breakpoint="475px"
        >
            <AuthForm
                name="Reset Password"
                method_function={post}
                route_name="password.store"
                button_title="Reset Password"
                processing={processing}
            >
                <FormInputField
                    name={"email"}
                    state_field={data.email}
                    setData={setData}
                    errors_field={errors.email}
                    icon="envelope"
                />

                <FormInputField
                    name={"new password"}
                    type="password"
                    state_field={data.password}
                    setData={setData}
                    errors_field={errors.password}
                    icon="lock"
                    state_to_change="password"
                />

                <FormInputField
                    name={"new password confirmation"}
                    type={"password"}
                    state_name={"password_confirmation"}
                    state_field={data.password_confirmation}
                    errors_field={errors.password_confirmation}
                    icon="lock"
                    setData={setData}
                    state_to_change="password_confirmation"
                />
            </AuthForm>
        </AuthLayout>
    );
}
