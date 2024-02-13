import React, { ReactNode } from "react";
import "@/CSS/borders.css";
import "@/CSS/letter_spacing.css";
import { Head } from "@inertiajs/react";
import BackgroundImage from "@/Components/LayoutItems/BackgroundImage";
import AuthForm from "@/Components/Auth/AuthForm";
import AuthLayoutChildren from "@/Components/LayoutItems/AuthLayoutChildren";

interface AuthLayoutProps {
    children: ReactNode;
    folder_name: string;
    img_classes?: string;
    title: string;
    name: string;
    method_function: (url: string) => void;
    route_name: string;
    button_title: string;
    link_route_name?: string;
    link_title?: string;
    processing: boolean;
}

const AuthLayout = ({
    children,
    folder_name,
    img_classes = "",
    title,
    name,
    method_function,
    route_name,
    button_title,
    link_route_name = "",
    link_title = "",
    processing = false,
}: AuthLayoutProps) => {
    return (
        <>
            <Head title={title} />
            <BackgroundImage
                picture_classes="h-full"
                folder_name={folder_name}
                img_classes={`object-top lg:object-bottom ${img_classes}`}
            />
            <AuthLayoutChildren
                name={name}
                method_function={method_function}
                route_name={route_name}
                button_title={button_title}
                link_route_name={link_route_name}
                link_title={link_title}
                processing={processing}
            >
                {children}
            </AuthLayoutChildren>
        </>
    );
};

export default AuthLayout;
