import React from "react";
import { Link } from "@inertiajs/react";
import Button from "./Button";
import WatchPopupIcon from "./WatchPopupIcon";
import WatchPopupTitle from "./WatchPopupTitle";
import WatchPopupMessage from "./WatchPopupMessage";
import WatchPopupLink from "./WatchPopupLink";

interface WatchPopupProps {
    icon_name: string;
    icon_className?: string;
    title: string;
    message: string;
    link_title: string;
    link_route_name: string;
}

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
