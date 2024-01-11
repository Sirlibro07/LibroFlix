import { useEffect } from "react";

import Auth from "@/Layouts/Auth";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link, useForm } from "@inertiajs/react";
import React from "react";
import AuthForm from "@/Components/AuthForm";
import FormInputField from "@/Components/FormInputField";
import FormCheckboxField from "@/Components/FormCheckboxField";
import AuthSuccessMessage from "@/Components/AuthSuccessMessage";

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
        <Auth img_path={"login_register"} form_position="end" title="Log In">
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
                    <Link href={route("register")} className="text-label">
                        Sign Up ?
                    </Link>
                    {canResetPassword && (
                        <Link
                            href={route("password.request")}
                            className="text-label"
                        >
                            forgot password?
                        </Link>
                    )}
                </div>
            </AuthForm>
        </Auth>
    );
}
