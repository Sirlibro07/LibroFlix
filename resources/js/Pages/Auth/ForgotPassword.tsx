import AuthLayout from "@/Layouts/AuthLayout";
import { useForm } from "@inertiajs/react";
import React from "react";
import FormInputField from "@/Components/FormItems/FormInputField";
import AuthSuccessMessage, {
    AuthSuccessMessageProps,
} from "@/Components/Auth/AuthSuccessMessage";
import alertMessage from "@/Helpers/functions/error/alertMessage";

interface ForgotPasswordProps extends AuthSuccessMessageProps {}

export default function ForgotPassword({ status }: ForgotPasswordProps) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    alertMessage();

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
