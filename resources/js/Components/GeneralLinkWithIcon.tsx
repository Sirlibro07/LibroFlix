import React, { ReactNode } from "react";
import GeneralLink from "./GeneralLink";

interface GeneralLinkWithIconProps {
    children: ReactNode;
    route_name: string;
    route_parameter?: string;
    icon: string;
    className?: string;
}

const GeneralLinkWithIcon = ({
    route_name,
    route_parameter = "",
    icon,
    children,
    className = "",
}: GeneralLinkWithIconProps) => {
    return (
        <GeneralLink
            route_name={route_name}
            route_parameter={route_parameter}
            border={false}
            className={`font-medium ${className}  py-[0.625rem] pl-3 pr-4`}
        >
            <div className="flex items-center">
                <i className={`fa-solid fa-${icon} mr-3  text-[1.125rem]`}></i>
                {children}
            </div>
        </GeneralLink>
    );
};

export default GeneralLinkWithIcon;
