import React from "react";
import Popup, { PopupProps } from "../Popup/Popup";

export interface PopupLayoutContentProps extends PopupProps {}

const PopupLayoutContent = ({
    icon_name,
    icon_className,
    title,
    message,
    link_title = "Go back",
    link_route_name = "home",
}: PopupProps) => {
    return (
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
    );
};

export default PopupLayoutContent;
