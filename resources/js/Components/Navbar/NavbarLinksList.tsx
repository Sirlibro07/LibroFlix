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
            className={`gap-y-12 bg-black  rounded-bl-xl text-typescale_21_px flex flex-col border border-t-0 border-r-0 z-10 border-grey  border-solid  absolute top-navbar_height w-[90%] right-0 transition-all duration-200 ${
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
