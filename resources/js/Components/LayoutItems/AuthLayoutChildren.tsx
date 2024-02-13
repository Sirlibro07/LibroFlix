import React from "react";
import AuthForm, { AuthFormProps } from "../Auth/AuthForm";

export interface AuthLayoutChildrenProps extends AuthFormProps {}

const AuthLayoutChildren = ({
    children,
    name,
    method_function,
    route_name,
    button_title,
    link_route_name = "",
    link_title = "",
    processing = false,
}: AuthLayoutChildrenProps) => {
    return (
        <main className="min-h-svh flex items-end">
            <AuthForm
                name={name}
                method_function={method_function}
                route_name={route_name}
                button_title={button_title}
                processing={processing}
                link_route_name={link_route_name}
                link_title={link_title}
            >
                {children}
            </AuthForm>
        </main>
    );
};

export default AuthLayoutChildren;
