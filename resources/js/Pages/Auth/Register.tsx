import { useEffect } from "react";
import AuthLayout from "@/Layouts/AuthLayout";
import { useForm } from "@inertiajs/react";
import React from "react";
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
            name="Sign Up"
            method_function={post}
            route_name="register"
            button_title="Sign up"
            link_route_name="login"
            link_title="have an account? Log in"
            processing={processing}
        >
            <FormInputField
                name={"name"}
                type={"text"}
                value={data.name}
                errors_field={errors.name}
                icon="user"
                setData={setData}
            />

            <FormInputField
                name={"email"}
                value={data.email}
                errors_field={errors.email}
                icon="envelope"
                setData={setData}
            />

            <FormInputField
                name={"password"}
                value={data.password}
                errors_field={errors.password}
                icon="lock"
                setData={setData}
            />

            <FormInputField
                name={"password confirmation"}
                value={data.password_confirmation}
                type={"password"}
                state_name={"password_confirmation"}
                errors_field={errors.password_confirmation}
                icon="lock"
                setData={setData}
            />
        </AuthLayout>
    );
}
