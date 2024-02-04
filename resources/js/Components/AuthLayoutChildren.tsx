import React, { ReactNode } from "react";
import BackgroundImage from "./BackgroundImage";

interface AuthLayoutChildrenProps {
    folder_name: string;
    img_classes: string;
    form_position: string;
    children: ReactNode;
}

const AuthLayoutChildren = ({
    folder_name,
    img_classes,
    form_position,
    children,
}: AuthLayoutChildrenProps) => {
    return (
        <>
            <BackgroundImage
                picture_classes="h-full"
                folder_name={folder_name}
                img_classes={`object-top lg:object-bottom ${img_classes}`}
            />
            <main
                className={`w-full h-fit relative flex items-end lg:h-[100vh]  lg:items-center lg:justify-start`}
            >
                {children}
            </main>
        </>
    );
};

export default AuthLayoutChildren;
