import { Link } from "@inertiajs/react";
import Button from "../Button/Button";
import React from "react";

const WatchPopupLink = ({ link_route_name, link_title }) => {
    return (
        <Link href={route(link_route_name)} className="w-full">
            <Button className="bg_brand w-full">{link_title}</Button>
        </Link>
    );
};

export default WatchPopupLink;
