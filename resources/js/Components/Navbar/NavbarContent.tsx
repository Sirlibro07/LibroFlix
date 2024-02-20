import React, { useContext } from "react";
import Logo from "./Logo";
import NavbarIcons from "./NavbarIcons";
import NavbarLinksList from "./NavbarLinksList";
import SearchBar from "../SearchBar/SearchBar";
import Menu_Searchbar_Context from "@/Contexts/Menu_Searchbar_Context";

const NavbarContent = () => {
    const { isSearchbarVisible } = useContext(Menu_Searchbar_Context);

    const visibility_styles = isSearchbarVisible
        ? "navbar_item_visible"
        : "navbar_item_not_visible";

    return (
        <div className="w-full flex justify-between items-center lg:w-fit lg:justify-normal">
            <Logo />
            <NavbarIcons />
            <NavbarLinksList />
            <SearchBar
                className={`absolute z-10 top-[5.688rem] mt-6 px-4 right-0 lg:static lg:px-0 lg:h-fit lg:top-auto lg:m-0 lg:w-[20rem] xl:w-[27rem] ${visibility_styles}`}
            />
        </div>
    );
};

export default NavbarContent;
