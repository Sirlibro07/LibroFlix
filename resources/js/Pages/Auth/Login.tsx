import { useEffect } from "react";

import AuthLayout from "@/Layouts/AuthLayout";
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
            media_query_breakpoint="450px"
        >
            <AuthForm
                name="Log In"
                method_function={post}
                route_name="login"
                button_title="Log in"
                link_route_name="register"
                link_title="Sign up"
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
                    name={"password"}
                    state_field={data.password}
                    setData={setData}
                    errors_field={errors.password}
                    icon="lock"
                />
                <AuthSuccessMessage status={status} />

                <div className="flex items-center justify-between mt-4 ">
                    <FormCheckboxField
                        name="remember"
                        label="Remember me"
                        state_field={data.remember}
                        setData={setData}
                    />
                    {canResetPassword && (
                        <GeneralLink
                            route_name="password.request"
                            className="auth_label_link text-end"
                        >
                            Lost password?
                        </GeneralLink>
                    )}
                </div>
            </AuthForm>
        </AuthLayout>
    );
}
