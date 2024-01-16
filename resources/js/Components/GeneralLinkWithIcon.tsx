import React, { ReactNode } from "react";
import GeneralLink from "./GeneralLink";

interface GeneralLinkWithIconProps {
    children: ReactNode;
    route_name: string;
    icon: string;
    className?: string;
}

const GeneralLinkWithIcon = ({
    route_name,
    icon,
    children,
    className = "",
}: GeneralLinkWithIconProps) => {
    return (
        <GeneralLink
            route_name={route_name}
            border={false}
            className={`font-medium ${className}  py-[0.625rem] pl-3 pr-4`}
        >
            <div className="flex items-center">
                <i className={`fa-solid fa-${icon} mr-3  text-[1.25rem]`}></i>
                {children}
            </div>
        </GeneralLink>
    );
};

export default GeneralLinkWithIcon;
