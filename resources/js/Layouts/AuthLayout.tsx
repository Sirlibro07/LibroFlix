import React, { ReactNode } from "react";
import "./CSS/AuthLayout.css";
import { Head } from "@inertiajs/react";
import "../Helpers/CSS/borders.css";
import getBackgroundImg from "@/Helpers/getBackgroundImg";
import BackgroundImage from "@/Components/BackgroundImage";

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
            <style>
                {`@media (max-height: ${media_query_breakpoint}) {
                        html,
                        body,
                        #app {
                            height: fit-content;
                        }
                    }`}
            </style>
            <Head title={title} />
            <main
                className={`w-full h-full relative flex items-end lg:items-center lg:justify-${form_position}`}
            >
                <BackgroundImage
                    picture_classes="w-full h-full"
                    img_function={img}
                    img_classes={`object-top lg:object-bottom ${img_classes}`}
                />
                {children}
            </main>
        </>
    );
};

export default AuthLayout;
