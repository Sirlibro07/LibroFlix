import React from "react";
import NavbarLinks from "./NavbarLinks";
import NavbarIcons from "./NavbarIcons";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

interface NavbarProps {
    onClickHandler: () => void;
    isMenuVisible: boolean;
    isSearchbarVisible: boolean;
    border: boolean;
}

const Navbar = ({
    border,
    onClickHandler,
    isMenuVisible,
    isSearchbarVisible,
}: NavbarProps) => {
    return (
        <>
            <nav
                className={`body-padding relative bg-black flex  items-center justify-between ${
                    border && "border-b border-border_color border-solid"
                } lg:justify-normal`}
            >
                <Logo />
                <NavbarIcons />
                <NavbarLinks />
                <SearchBar />
            </nav>
            <div
                onClick={onClickHandler}
                className={`w-full h-[calc(100%-5.625rem)] absolute top-[5.625rem] left-0 z-[1] ${
                    isMenuVisible || isSearchbarVisible ? "block" : "hidden"
                }`}
            ></div>
        </>
    );
};

export default Navbar;
