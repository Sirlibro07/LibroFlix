import React, { useContext } from "react";
import Menu_Searchbar_Context from "@/Contexts/Menu_Searchbar_Context";
import NavbarLink from "./NavbarLink";
import UserContext from "@/Contexts/UserContext";
import NavbarAuthLinks from "./NavbarAuthLinks";

const NavbarLinks = () => {
    const { isMenuVisible } = useContext(Menu_Searchbar_Context);
    const { isLoggedIn } = useContext(UserContext);

    const routes: { name: string; route: string; pathname: string }[] = [
        { name: "Home", route: "home", pathname: "" },
        { name: "Watchlist", route: "watchlist.show", pathname: "watchlist" },
    ];

    isLoggedIn &&
        routes.push({
            name: "Account",
            route: "profile.edit",
            pathname: "profile",
        });

    return (
        <ul
            className={`gap-y-12 bg-black  rounded-bl-xl text-typescale_21_px flex flex-col border border-t-0 border-r-0 z-10 border-grey  border-solid  absolute top-navbar_height w-[90%]   right-0 transition-all duration-200 ${
                isMenuVisible ? "flex" : "hidden"
            } h-fit pt-12 ${
                isLoggedIn ? "pb-12" : "pb-4"
            } bg-body lg:flex lg:text-base lg:flex-row lg:gap-y-0 lg:gap-x-6 lg:w-fit lg:h-fit lg:py-0 lg:static lg:mx-12 lg:border-0  lg:font-normal `}
        >
            {routes.map((link, index) => (
                <NavbarLink link={link} key={index} />
            ))}

            {!isLoggedIn && <NavbarAuthLinks className="lg:hidden" />}
        </ul>
    );
};

export default NavbarLinks;
