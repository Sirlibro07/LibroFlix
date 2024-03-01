import React from "react";
import MenuIcon from "./MenuIcon";
import SearchIcon from "./SearchIcon";

const NavbarIcons = () => {
    return (
        <div className="flex items-center">
            <SearchIcon />
            <MenuIcon />
        </div>
    );
};

export default NavbarIcons;
