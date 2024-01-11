import React from "react";
import MenuIcon from "./MenuIcon";
import SearchBarIcon from "./SearchBarIcon";

const NavbarIcons = () => {
    return (
        <>
            <div className="flex items-center">
                <SearchBarIcon className="lg:hidden " />
                <MenuIcon />
            </div>
        </>
    );
};

export default NavbarIcons;
