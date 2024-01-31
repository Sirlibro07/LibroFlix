import { useEffect } from "react";

import AuthLayout from "@/Layouts/AuthLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/react";
import React from "react";
import AuthForm from "@/Components/AuthForm";
import FormInputField from "@/Components/FormInputField";
import FormCheckboxField from "@/Components/FormCheckboxField";
import AuthSuccessMessage from "@/Components/AuthSuccessMessage";
import GeneralLink from "@/Components/GeneralLink";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    return (
        <AuthLayout
            folder_name={"login_register"}
            form_position="end"
            title="Log In"
            media_query_breakpoint="500px"
        >
            <AuthForm name="Log In" method_function={post} route_name="login">
                <FormInputField
                    name={"email"}
                    state_field={data.email}
                    setData={setData}
                    errors_field={errors.email}
                    icon="envelope"
                />

                <FormInputField
                    name={"password"}
                    state_field={data.password}
                    setData={setData}
                    errors_field={errors.password}
                    icon="lock"
                />
                <AuthSuccessMessage status={status} />

                <FormCheckboxField
                    name="remember"
                    label="Remember me"
                    state_field={data.remember}
                    setData={setData}
                />

                <PrimaryButton disabled={processing}>Log in</PrimaryButton>

                <div className="flex flex-col items-center mt-4 gap-y-2 text-border_label ">
                    <GeneralLink route_name="register" className="text-label">
                        Sign Up ?
                    </GeneralLink>
                    {canResetPassword && (
                        <GeneralLink
                            route_name="password.request"
                            className="text-label"
                        >
                            forgot password?
                        </GeneralLink>
                    )}
                </div>
            </AuthForm>
        </AuthLayout>
    );
}
