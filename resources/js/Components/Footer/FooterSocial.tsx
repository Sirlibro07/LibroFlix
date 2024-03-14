import React from "react";
import Icon, { IconProps } from "../Global/Icon";
import { Link } from "@inertiajs/react";

export interface FooterSocialProps
    extends Omit<IconProps, "className" | "onClick"> {
    className?: string;
    link_url: string;
}

const FooterSocial = ({
    className = "",
    icon_type,
    icon_name = "",
    link_url,
}: FooterSocialProps) => {
    return (
        <a
            className={`border-2 h-[2.5rem] aspect-square rounded-full flex items-center justify-center transitions cursor-pointer hover:scale-105 ${className}`}
            href={link_url}
            target="blank"
        >
            <Icon icon_type={icon_type} icon_name={icon_name} />
        </a>
    );
};

export default FooterSocial;
