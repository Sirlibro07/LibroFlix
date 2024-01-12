import React, { useEffect, useState } from "react";
import GeneralLink from "./GeneralLink";

interface NavbarLinkProps {
    link: {
        name: string;
        route: string;
        pathname: string;
    };
}

const NavbarLink = ({ link }: NavbarLinkProps) => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);
    return (
        <li className=" ml-[-0.5rem] flex items-center lg:ml-0 ">
            <div className="w-4 h-4 mr-3 rounded-full bg-brand lg:hidden"></div>
            <GeneralLink
                href={route(link.route)}
                className={
                    "/" + link.pathname === window.location.pathname
                        ? "lg:text-contrast custom_border_active"
                        : "lg:text-unused_link_option_color"
                }
            >
                {width > 1023 ? link.name : link.name.toUpperCase()}
            </GeneralLink>
        </li>
    );
};
export default NavbarLink;
