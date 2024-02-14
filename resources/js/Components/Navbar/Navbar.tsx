import React, { useContext } from "react";
import NavbarLinks from "./NavbarLinks";
import NavbarIcons from "./NavbarIcons";
import Logo from "./Logo";
import SearchBar from "../SearchBar/SearchBar";
import NavbarItemsCloseOverlay from "./NavbarItemsCloseOverlay";
import NavbarAuthLinks from "./NavbarAuthLinks";
import UserContext from "@/Contexts/UserContext";
import Menu_Searchbar_Context from "@/Contexts/Menu_Searchbar_Context";

interface NavbarProps {
    border: boolean;
}

const Navbar = ({ border }: NavbarProps) => {
    const { isLoggedIn } = useContext(UserContext);
    const { isSearchbarVisible } = useContext(Menu_Searchbar_Context);

    const visibility_styles = isSearchbarVisible
        ? "navbar_item_visible"
        : "navbar_item_not_visible";

    return (
        <>
            <nav
                className={`body-padding relative h-navbar_height flex  items-center justify-between ${
                    border &&
                    "border-b border-grey border-solid lg:justify-between "
                }`}
            >
                <div className="w-full flex justify-between items-center lg:w-fit lg:justify-normal">
                    <Logo />
                    <NavbarIcons />
                    <NavbarLinks />
                    <SearchBar
                        className={`absolute z-10 top-[5.688rem] mt-6 px-4 right-0 lg:static lg:px-0 lg:h-fit lg:top-auto lg:m-0 lg:w-[20rem] xl:w-[27rem] ${visibility_styles}`}
                    />
                </div>
                {!isLoggedIn && <NavbarAuthLinks className="hidden lg:flex" />}
            </nav>
            <NavbarItemsCloseOverlay />
        </>
    );
};

export default Navbar;
