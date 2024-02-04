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
    form_position?: string;
    title: string;
    media_query_breakpoint?: string;
}

const AuthLayout = ({
    children,
    folder_name,
    img_classes = "",
    form_position = "start",
    title,
    media_query_breakpoint = "580px",
}: AuthLayoutProps) => {
    const img = (version: string) => {
        return getBackgroundImg(folder_name, version);
    };

    return (
        <>
            {/* <style>
                {`@media (max-height: ${media_query_breakpoint}) {
                        html,
                        body,
                        #app {
                            height: fit-content;
                            background-color: black
                        }

                        .auth_form
                        {
                            border-radius: 0;
                        }
                    }`}
            </style> */}
            <Head title={title} />
            <AuthLayoutChildren
                folder_name={folder_name}
                img_classes={img_classes}
                form_position={form_position}
            >
                {children}
            </AuthLayoutChildren>
        </>
    );
};

export default AuthLayout;
