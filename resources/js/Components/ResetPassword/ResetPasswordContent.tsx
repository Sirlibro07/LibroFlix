import React from "react";
import AuthLayout from "@/Layouts/AuthLayout";
import { useForm } from "@inertiajs/react";
import FormInputField from "@/Components/FormItems/FormInputField";

export interface ResetPasswordContentProps {
    token: string;
    email: string;
}

const ResetPasswordContent = ({ token, email }: ResetPasswordContentProps) => {
    const { data, setData, post, processing, errors } = useForm({
        token: token,
        email: email,
        password: "",
        password_confirmation: "",
    });

    return (
        <AuthLayout
            folder_name={"forgot_reset_password"}
            img_classes="object-right"
            head_title="Reset Password"
            name="Reset Password"
            method_function={post}
            route_name="password_reset.store"
            button_title="Reset Password"
            processing={processing}
        >
            <FormInputField
                name={"new password"}
                value={data.password}
                type="password"
                setData={setData}
                message={errors.password}
                icon_name="lock"
                state_name="password"
            />

            <FormInputField
                name={"new password confirmation"}
                value={data.password_confirmation}
                type={"password"}
                state_name={"password_confirmation"}
                message={errors.password_confirmation}
                icon_name="lock"
                setData={setData}
            />
        </AuthLayout>
    );
};

export default ResetPasswordContent;
