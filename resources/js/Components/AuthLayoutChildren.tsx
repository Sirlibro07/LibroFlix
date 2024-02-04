import React, { ReactNode } from "react";
import BackgroundImage from "./BackgroundImage";

interface AuthLayoutChildrenProps {
    folder_name: string;
    img_classes: string;
    children: ReactNode;
}

const AuthLayoutChildren = ({
    folder_name,
    img_classes,
    children,
}: AuthLayoutChildrenProps) => {
    return (
        <>
            <BackgroundImage
                picture_classes="h-full"
                folder_name={folder_name}
                img_classes={`object-top lg:object-bottom ${img_classes}`}
            />
            {children}
        </>
    );
};

export default AuthLayoutChildren;
