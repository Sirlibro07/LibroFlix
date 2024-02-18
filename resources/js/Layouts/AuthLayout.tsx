import React from "react";
import "@/CSS/borders.css";
import "@/CSS/letter_spacing.css";
import { Head } from "@inertiajs/react";
import BackgroundImage, {
    BackgroundImageProps,
} from "@/Components/LayoutItems/BackgroundImage";
import AuthLayoutChildren, {
    AuthLayoutChildrenProps,
} from "@/Components/LayoutItems/AuthLayoutChildren";

interface AuthLayoutProps
    extends AuthLayoutChildrenProps,
        Omit<BackgroundImageProps, "picture_classes"> {
    head_title: string;
}

const AuthLayout = ({
    children,
    folder_name,
    img_classes = "",
    head_title,
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
            <Head title={head_title} />
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
