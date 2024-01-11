import { useEffect } from "react";
import Auth from "@/Layouts/Auth";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link, useForm } from "@inertiajs/react";
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
        <Auth img_path={"login_register"} title="Sign Up">
            <AuthForm
                name="Sign Up"
                route={route}
                post={post}
                endpoint="register"
            >
                <FormInputField
                    name={"name"}
                    type={"text"}
                    state_field={data.name}
                    errors_field={errors.name}
                    icon="lock"
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

                <PrimaryButton disabled={processing}>Sign Up</PrimaryButton>

                <div className="flex flex-col items-center mt-4 gap-y-2 text-label ">
                    <Link href={route("login")}>Already have an account ?</Link>
                </div>
            </AuthForm>
        </Auth>
    );
}
