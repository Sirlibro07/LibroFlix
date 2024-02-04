import React, { ReactNode } from "react";
import AuthForm from "./AuthForm";

interface AuthLayoutChildrenProps {
    children: ReactNode;
    name: string;
    method_function: (url: string) => void;
    route_name: string;
    button_title: string;
    link_route_name?: string;
    link_title?: string;
    processing: boolean;
}

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
    );
};

export default AuthLayoutChildren;
