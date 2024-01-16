import React from "react";
import NavbarLinks from "./NavbarLinks";
import NavbarIcons from "./NavbarIcons";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

const Navbar = () => {
    return (
        <nav className="px-mobile_side_padding md:px-10 lg:px-20 relative bg-black flex  items-center justify-between border-b border-border_color  border-solid lg:justify-normal">
            <Logo />
            <NavbarIcons />
            <NavbarLinks />
            <SearchBar />
        </nav>
    );
};

export default Navbar;
