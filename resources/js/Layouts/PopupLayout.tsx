import React from "react";
import BackgroundImage from "@/Components/LayoutItems/BackgroundImage";
import { Head } from "@inertiajs/react";
import Popup, { PopupProps } from "@/Components/Popup/Popup";

interface PopupLayoutProps extends PopupProps {
    head_title: string;
}

const PopupLayout = ({
    head_title,
    icon_name,
    icon_className,
    title,
    message,
    link_title = "Go back",
    link_route_name = "home",
}: PopupLayoutProps) => {
    return (
        <>
            <Head title={head_title} />
            <BackgroundImage
                folder_name="error"
                picture_classes="h-full md:opacity-[.75] brightness-[40%] md:brightness-[35%]"
            />
            <main
                className={`min-h-svh py-[8rem] flex justify-center items-end md:items-center`}
            >
                <Popup
                    icon_name={icon_name}
                    message={message}
                    title={title}
                    icon_className={icon_className}
                    link_route_name={link_route_name}
                    link_title={link_title}
                />
            </main>
        </>
    );
};

export default PopupLayout;
