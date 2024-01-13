import React from "react";
import MenuIcon from "./MenuIcon";
import SearchIcon from "./SearchIcon";

const NavbarIcons = () => {
    return (
        <>
            <div className="flex items-center">
                <SearchIcon className="lg:hidden " />
                <MenuIcon />
            </div>
        </>
    );
};

export default NavbarIcons;
