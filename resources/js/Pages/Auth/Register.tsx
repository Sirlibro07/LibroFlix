import AuthLayout from "@/Layouts/AuthLayout";
import { useForm } from "@inertiajs/react";
import React from "react";
import FormInputField from "@/Components/FormItems/FormInputField";

export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    return (
        <AuthLayout
            folder_name={"login_register"}
            head_title="Sign Up"
            name="Sign Up"
            method_function={post}
            route_name="register.store"
            button_title="Sign up"
            link_route_name="login.create"
            link_title="Have an account? Log in"
            processing={processing}
        >
            <FormInputField
                name={"name"}
                type={"text"}
                value={data.name}
                message={errors.name}
                icon_name="user"
                setData={setData}
            />

            <FormInputField
                name={"email"}
                value={data.email}
                message={errors.email}
                icon_name="envelope"
                setData={setData}
            />

            <FormInputField
                name={"password"}
                value={data.password}
                message={errors.password}
                icon_name="lock"
                setData={setData}
            />

            <FormInputField
                name={"password confirmation"}
                value={data.password_confirmation}
                type={"password"}
                state_name={"password_confirmation"}
                message={errors.password_confirmation}
                icon_name="lock"
                setData={setData}
            />
        </AuthLayout>
    );
}
