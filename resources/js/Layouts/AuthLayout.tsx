import React, { ReactNode } from "react";
import "@/CSS/borders.css";
import "@/CSS/letter_spacing.css";
import { Head } from "@inertiajs/react";
import BackgroundImage from "@/Components/BackgroundImage";
import AuthForm from "@/Components/AuthForm";

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
            <style>{`
                    #app {
                        min-height: 100vh;
                        display: flex;
                        align-items: end;
                    }
                `}</style>
        </>
    );
};

export default AuthLayout;
