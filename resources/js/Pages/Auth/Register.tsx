import { useEffect } from "react";
import AuthLayout from "@/Layouts/AuthLayout";
import { useForm } from "@inertiajs/react";
import React from "react";
import AuthForm from "@/Components/AuthForm";
import FormInputField from "@/Components/FormInputField";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
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
            folder_name={"login_register"}
            title="Sign Up"
            media_query_breakpoint="665px"
        >
            <AuthForm
                name="Sign Up"
                method_function={post}
                route_name="register"
                button_title="Sign up"
                link_route_name="login"
                link_title="Log in"
                processing={processing}
            >
                <FormInputField
                    name={"name"}
                    type={"text"}
                    state_field={data.name}
                    errors_field={errors.name}
                    icon="user"
                    setData={setData}
                />

                <FormInputField
                    name={"email"}
                    state_field={data.email}
                    errors_field={errors.email}
                    icon="envelope"
                    setData={setData}
                />

                <FormInputField
                    name={"password"}
                    state_field={data.password}
                    errors_field={errors.password}
                    icon="lock"
                    setData={setData}
                />

                <FormInputField
                    name={"password confirmation"}
                    type={"password"}
                    state_name={"password_confirmation"}
                    state_field={data.password_confirmation}
                    errors_field={errors.password_confirmation}
                    icon="lock"
                    setData={setData}
                />
            </AuthForm>
        </AuthLayout>
    );
}
