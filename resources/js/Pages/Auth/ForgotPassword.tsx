import AuthLayout from "@/Layouts/AuthLayout";
import { useForm } from "@inertiajs/react";
import React from "react";
import FormInputField from "@/Components/FormItems/FormInputField";
import AuthSuccessMessage from "@/Components/Auth/AuthSuccessMessage";

export default function ForgotPassword({ status }: { status: string }) {
    const { data, setData, post, processing, recentlySuccessful, errors } =
        useForm({
            email: "",
        });

    return (
        <AuthLayout
            folder_name={"forgot_reset_password"}
            img_classes="object-right"
            head_title="Forgot Password"
            name="Recover Password"
            method_function={post}
            route_name="password.email"
            button_title="Send Recovery Email"
            processing={processing}
        >
            <AuthSuccessMessage status={status} />
            <FormInputField
                name={"email"}
                value={data.email}
                setData={setData}
                message={errors.email}
                icon_name="envelope"
            />
        </AuthLayout>
    );
}
