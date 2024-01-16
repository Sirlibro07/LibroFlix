import React from "react";
import NavbarLinks from "./NavbarLinks";
import NavbarIcons from "./NavbarIcons";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

const Navbar = () => {
    return (
        <nav className="body-padding relative bg-black flex  items-center justify-between border-b border-border_color  border-solid lg:justify-normal">
            <Logo />
            <NavbarIcons />
            <NavbarLinks />
            <SearchBar />
        </nav>
    );
};

export default Navbar;
