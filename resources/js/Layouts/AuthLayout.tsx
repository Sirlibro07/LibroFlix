import React, { ReactNode } from "react";
import "./CSS/AuthLayout.css";
import "../Helpers/CSS/borders.css";
import "../Helpers/CSS/letter_spacing.css";
import getBackgroundImg from "@/Helpers/getBackgroundImg";
import AuthLayoutChildren from "@/Components/AuthLayoutChildren";
import { Head } from "@inertiajs/react";

interface AuthLayoutProps {
    children: ReactNode;
    folder_name: string;
    img_classes?: string;
    title: string;
    media_query_breakpoint?: string;
}

const AuthLayout = ({
    children,
    folder_name,
    img_classes = "",
    title,
}: AuthLayoutProps) => {
    const img = (version: string) => {
        return getBackgroundImg(folder_name, version);
    };

    return (
        <>
            <Head title={title} />
            <AuthLayoutChildren
                folder_name={folder_name}
                img_classes={img_classes}
            >
                {children}
            </AuthLayoutChildren>
        </>
    );
};

export default AuthLayout;
