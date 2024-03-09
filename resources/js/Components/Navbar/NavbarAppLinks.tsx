import React from "react";
import NavbarAppLink from "./NavbarAppLink";

interface NavbarAppLinksProps {
    isLoggedIn: boolean;
}

type NavbarRouteType = { name: string; route: string; pathname: string };

const NavbarAppLinks = ({ isLoggedIn }: NavbarAppLinksProps) => {
    const routes: NavbarRouteType[] = [
        { name: "Home", route: "home", pathname: "" },
    ];

    isLoggedIn &&
        routes.push(
            {
                name: "Watchlist",
                route: "watchlist_items.index",
                pathname: "watchlist",
            },
            {
                name: "Account",
                route: "profile.edit",
                pathname: "profile",
            }
        );
    return (
        <>
            {routes.map((link, index) => (
                <NavbarAppLink link={link} key={index} />
            ))}
        </>
    );
};

export default NavbarAppLinks;
