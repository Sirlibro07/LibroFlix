import AuthLayout from "@/Layouts/AuthLayout";
import { useForm } from "@inertiajs/react";
import React from "react";
import FormInputField from "@/Components/FormInputField";
import AuthSuccessMessage from "@/Components/AuthSuccessMessage";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    return (
        <AuthLayout
            folder_name={"forgot_reset_password"}
            img_classes="object-right"
            title="Forgot Password"
            name="Recover Password"
            method_function={post}
            route_name="password.email"
            button_title="Send Recovery Email"
            processing={processing}
        >
            <FormInputField
                name={"email"}
                value={data.email}
                setData={setData}
                errors_field={errors.email}
                icon_name="envelope"
            />

            <AuthSuccessMessage status={status} />
        </AuthLayout>
    );
}
