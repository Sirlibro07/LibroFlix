import React from "react";
import WatchPopupIcon, { WatchPopupIconProps } from "./WatchPopupIcon";
import WatchPopupTitle, { WatchPopupTitleProps } from "./WatchPopupTitle";
import WatchPopupMessage, { WatchPopupMessageProps } from "./WatchPopupMessage";
import WatchPopupLink, { WatchPopupLinkProps } from "./WatchPopupLink";

interface WatchPopupProps
    extends WatchPopupIconProps,
        WatchPopupTitleProps,
        WatchPopupMessageProps,
        WatchPopupLinkProps {}

const WatchPopup = ({
    icon_name,
    icon_className,
    title,
    message,
    link_title,
    link_route_name,
}: WatchPopupProps) => {
    return (
        <div className="w-full max-w-[28.125rem] h-fit bg-dark text-center flex flex-col items-center p-5 pt-0 rounded-[1.25rem]">
            <WatchPopupIcon
                icon_name={icon_name}
                icon_className={icon_className}
            />
            <WatchPopupTitle title={title} />
            <WatchPopupMessage message={message} />
            <WatchPopupLink
                link_route_name={link_route_name}
                link_title={link_title}
            />
        </div>
    );
};

export default WatchPopup;
