import React, { ReactNode } from "react";
import "@/CSS/borders.css";
import "@/CSS/letter_spacing.css";
import { Head } from "@inertiajs/react";
import BackgroundImage, {
    BackgroundImageProps,
} from "@/Components/LayoutItems/BackgroundImage";
import AuthLayoutChildren from "@/Components/LayoutItems/AuthLayoutChildren";
import AuthLayoutContext, {
    AuthLayoutContextProps,
} from "@/Contexts/AuthLayoutContext";

interface AuthLayoutProps
    extends AuthLayoutContextProps,
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
    const renderWithContext = (auth_content_jsx: ReactNode): ReactNode => {
        return (
            <AuthLayoutContext.Provider
                value={{
                    children: children,
                    method_function: method_function,
                    route_name: route_name,
                    button_title: button_title,
                    link_route_name: link_route_name,
                    link_title: link_title,
                    processing: processing,
                    name: name,
                }}
            >
                {auth_content_jsx}
            </AuthLayoutContext.Provider>
        );
    };

    return (
        <>
            {renderWithContext(
                <>
                    <Head title={head_title} />
                    <BackgroundImage
                        picture_classes="h-full"
                        folder_name={folder_name}
                        img_classes={`object-top lg:object-bottom ${img_classes}`}
                    />
                    <AuthLayoutChildren />
                </>
            )}
        </>
    );
};

export default AuthLayout;
