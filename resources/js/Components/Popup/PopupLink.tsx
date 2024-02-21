import { Link } from "@inertiajs/react";
import Button from "../Button/Button";
import React from "react";

export interface PopupLinkProps {
    link_route_name?: string;
    link_title?: string;
}

const PopupLink = ({
    link_route_name = "home",
    link_title = "Go back",
}: PopupLinkProps) => {
    return (
        <Link href={route(link_route_name)} className="w-full">
            <Button className="bg_brand w-full">{link_title}</Button>
        </Link>
    );
};

export default PopupLink;
