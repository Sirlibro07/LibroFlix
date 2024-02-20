import React, { useContext } from "react";
import Menu_Searchbar_Context from "@/Contexts/Menu_Searchbar_Context";
import UserContext from "@/Contexts/UserContext";
import NavbarAuthLinks from "./NavbarAuthLinks";
import NavbarAppLinks from "./NavbarAppLinks";

const NavbarLinksList = () => {
    const { isMenuVisible } = useContext(Menu_Searchbar_Context);
    const { isLoggedIn } = useContext(UserContext);

    return (
        <ul
            className={`w-full max-w-[500px]   gap-y-12 bg-black rounded-b-xl text-typescale_21_px flex flex-col border  z-10 border-grey  border-solid  absolute right-0 top-navbar_height  transition-all duration-200 ${
                isMenuVisible ? "flex" : "hidden"
            } h-fit pt-12 ${
                isLoggedIn ? "pb-12" : "pb-4"
            } bg-body lg:flex lg:text-base lg:flex-row lg:gap-y-0 lg:gap-x-6 lg:w-fit lg:h-fit lg:py-0 lg:static lg:mx-12 lg:border-0  lg:font-normal `}
        >
            <NavbarAppLinks isLoggedIn={isLoggedIn} />

            {!isLoggedIn && <NavbarAuthLinks />}
        </ul>
    );
};

export default NavbarLinksList;
