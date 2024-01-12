import React, { useState } from "react";
import NavbarLinks from "./NavbarLinks";
import NavbarIcons from "./NavbarIcons";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Menu_Searchbar_Context from "@/Contexts/Menu_Searchbar_Context";

const Navbar = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [isSearchbarVisible, setIsSearchbarVisible] = useState(false);

    return (
        <Menu_Searchbar_Context.Provider
            value={{
                isMenuVisible: isMenuVisible,
                setIsMenuVisible: setIsMenuVisible,
                isSearchbarVisible: isSearchbarVisible,
                setIsSearchbarVisible: setIsSearchbarVisible,
            }}
        >
            <nav className=" bg-black flex px-mobile_side_padding items-center justify-between border-b border-border_color  border-solid lg:justify-normal">
                <Logo />
                <NavbarIcons />
                <NavbarLinks />
                <SearchBar />
            </nav>
        </Menu_Searchbar_Context.Provider>
    );
};

export default Navbar;
