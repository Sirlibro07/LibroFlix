import React, { useContext } from "react";
import Menu_Searchbar_Context from "@/Contexts/Menu_Searchbar_Context";
import NavbarAccountLinks from "./NavbarAccountLinks";
import NavbarLink from "./NavbarLink";
import UserContext from "@/Contexts/UserContext";

const NavbarLinks = () => {
    const isMenuVisible = useContext(Menu_Searchbar_Context).isMenuVisible;
    const isLoggedIn = useContext(UserContext).isLoggedIn;

    const routes = [
        { name: "Movies", route: "movies.index", pathname: "movies" },
        { name: "Characters", route: "home", pathname: "2" },
    ];

    isLoggedIn &&
        routes.push({
            name: "Account",
            route: "profile.edit",
            pathname: "profile",
        });

    return (
        <ul
            className={`gap-y-12  rounded-bl-xl text-typescale_21_px flex flex-col border border-t-0 border-r-0 z-10 border-border_color  border-solid text-contrast absolute top-[5.625rem] w-[90%]   right-0 transition-all duration-200 ${
                isMenuVisible ? "flex" : "hidden"
            } h-fit pt-12 ${
                isLoggedIn ? "pb-12" : "pb-4"
            } bg-body lg:flex lg:text-base lg:flex-row lg:gap-y-0 lg:gap-x-6 lg:w-fit lg:h-fit lg:py-0 lg:static lg:mx-12 lg:border-0  lg:font-normal `}
        >
            {routes.map((link, index) => (
                <NavbarLink link={link} key={index} />
            ))}

            {!isLoggedIn && <NavbarAccountLinks />}
        </ul>
    );
};

export default NavbarLinks;
