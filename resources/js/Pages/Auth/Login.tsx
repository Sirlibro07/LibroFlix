import { useEffect } from "react";
import AuthLayout from "@/Layouts/AuthLayout";
import { useForm } from "@inertiajs/react";
import React from "react";
import FormInputField from "@/Components/FormInputField";
import FormCheckboxField from "@/Components/FormCheckboxField";
import GeneralLink from "@/Components/GeneralLink";

export default function Login() {
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
            title="Log In"
            name="Log In"
            method_function={post}
            route_name="login"
            button_title="Log in"
            link_route_name="register"
            link_title="Don't have an account? Sign up"
            processing={processing}
        >
            <FormInputField
                name={"email"}
                value={data.email}
                setData={setData}
                errors_field={errors.email}
                icon_name="envelope"
            />
            <FormInputField
                name={"password"}
                value={data.password}
                setData={setData}
                errors_field={errors.password}
                icon_name="lock"
            />

            <div className="flex items-center justify-between mt-6 ">
                <FormCheckboxField
                    name="remember"
                    label="Remember me"
                    state_field={data.remember}
                    setData={setData}
                />
                <GeneralLink
                    route_name="password.request"
                    className="auth_label_link text-end"
                >
                    Lost password?
                </GeneralLink>
            </div>
        </AuthLayout>
    );
}
