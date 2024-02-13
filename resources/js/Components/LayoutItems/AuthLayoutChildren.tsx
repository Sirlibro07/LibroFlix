import React from "react";
import AuthForm from "../Auth/AuthForm";

const AuthLayoutChildren = ({
    children,
    name,
    method_function,
    route_name,
    button_title,
    link_route_name = "",
    link_title = "",
    processing = false,
}) => {
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
