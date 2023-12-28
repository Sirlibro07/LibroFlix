import GuestLayout from "@/Layouts/GuestLayout";
import { useForm } from "@inertiajs/react";
import React from "react";
import AuthForm from "@/Components/AuthForm";
import FormInputField from "@/Components/FormInputField";
import PrimaryButton from "@/Components/PrimaryButton";
import AuthSuccessMessage from "@/Components/AuthSuccessMessage";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    return (
        <GuestLayout
            img_path={"forgot_reset_password"}
            form_position="end"
            img_classes="object-right"
            title="Forgot Password"
            media_query_breakpoint="360px"
        >
            <AuthForm
                name="Recover Password"
                post={post}
                route={route}
                endpoint="password.email"
            >
                <FormInputField
                    name={"email"}
                    state_field={data.email}
                    setData={setData}
                    errors_field={errors.email}
                    icon="envelope"
                />

                <AuthSuccessMessage status={status} />

                <PrimaryButton disabled={processing}>
                    Send Recovery Email
                </PrimaryButton>
            </AuthForm>
        </GuestLayout>
    );
}
