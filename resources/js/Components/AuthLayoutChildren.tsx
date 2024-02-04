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
                className={`w-full h-fit relative bg-black flex items-end rounded-t-[1.875rem] lg:w-[37.5rem] lg:h-full lg:min-h-[100vh] lg:rounded-none  lg:items-center lg:justify-start`}
            >
                {children}
            </main>
        </>
    );
};

export default AuthLayoutChildren;
