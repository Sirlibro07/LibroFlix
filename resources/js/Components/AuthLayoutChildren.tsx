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
            <main
                className={`w-full h-full relative flex items-end lg:items-center lg:justify-start`}
            >
                <BackgroundImage
                    picture_classes="h-full"
                    folder_name={folder_name}
                    img_classes={`object-top lg:object-bottom ${img_classes}`}
                />
                {children}
            </main>
        </>
    );
};

export default AuthLayoutChildren;
