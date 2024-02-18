import { useEffect } from "react";
import AuthLayout from "@/Layouts/AuthLayout";
import { useForm } from "@inertiajs/react";
import React from "react";
import FormInputField from "@/Components/FormItems/FormInputField";
import AppLayout from "@/Layouts/AppLayout";
import WatchPopup from "@/Components/Watch/WatchPopup";

const ResetPassword = ({ email, token, isTokenValid }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: "",
        password_confirmation: "",
    });

    console.log(isTokenValid);

    return (
        <>
            {isTokenValid ? (
                <AuthLayout
                    folder_name={"forgot_reset_password"}
                    img_classes="object-right"
                    head_title="Reset Password"
                    name="Reset Password"
                    method_function={post}
                    route_name="password.store"
                    button_title="Reset Password"
                    processing={processing}
                >
                    <FormInputField
                        name={"new password"}
                        value={data.password}
                        type="password"
                        setData={setData}
                        message={errors.password}
                        icon_name="lock"
                        state_name="password"
                    />

                    <FormInputField
                        name={"new password confirmation"}
                        value={data.password_confirmation}
                        type={"password"}
                        state_name={"password_confirmation"}
                        message={errors.password_confirmation}
                        icon_name="lock"
                        setData={setData}
                    />
                </AuthLayout>
            ) : (
                <AppLayout head_title={"Reset Password"}>
                    <main className="w-full h-[calc(100svh-5.625rem)] min-h-[25rem] pb-4 flex  justify-center items-end  md:items-center">
                        <WatchPopup
                            icon_name="hand"
                            icon_className="ml-[-0.063rem]"
                            title={"Token Invalid"}
                            message={`the token could be invalid or expired time ago, please try again`}
                            link_title={"Try again"}
                            link_route_name={"password.request"}
                        />
                    </main>
                </AppLayout>
            )}
        </>
    );
};

export default ResetPassword;
