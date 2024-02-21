import React from "react";
import PopupIcon, { PopupIconProps } from "./PopupIcon";
import PopupTitle, { PopupTitleProps } from "./PopupTitle";
import PopupMessage, { PopupMessageProps } from "./PopupMessage";
import PopupLink, { PopupLinkProps } from "./PopupLink";

interface PopupProps
    extends PopupIconProps,
        PopupTitleProps,
        PopupMessageProps,
        PopupLinkProps {
    popup_link?: boolean;
}

const Popup = ({
    icon_name,
    icon_className,
    title,
    message,
    popup_link = true,
    link_title = "Go back",
    link_route_name = "home",
}: PopupProps) => {
    return (
        <div className="w-full max-w-[28.125rem] h-fit bg-dark text-center flex flex-col items-center p-5 pt-0 rounded-[1.25rem]">
            <PopupIcon icon_name={icon_name} icon_className={icon_className} />
            <PopupTitle title={title} />
            <PopupMessage message={message} />
            {popup_link && (
                <PopupLink
                    link_route_name={link_route_name}
                    link_title={link_title}
                />
            )}
        </div>
    );
};

export default Popup;
