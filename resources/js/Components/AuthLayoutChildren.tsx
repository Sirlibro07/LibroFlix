import { Head } from "@inertiajs/react";
import React, { ReactNode } from "react";
import BackgroundImage from "./BackgroundImage";

interface AuthLayoutChildrenProps {
    title: string;
    img: any;
    img_classes: string;
    form_position: string;
    children: ReactNode;
}

const AuthLayoutChildren = ({
    title,
    img,
    img_classes,
    form_position,
    children,
}: AuthLayoutChildrenProps) => {
    return (
        <>
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

export default AuthLayoutChildren;
