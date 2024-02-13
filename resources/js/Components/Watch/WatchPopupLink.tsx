import { Link } from "@inertiajs/react";
import Button from "../Button/Button";
import React from "react";

export interface WatchPopupLinkProps {
    link_route_name: string;
    link_title: string;
}

const WatchPopupLink = ({
    link_route_name,
    link_title,
}: WatchPopupLinkProps) => {
    return (
        <Link href={route(link_route_name)} className="w-full">
            <Button className="bg_brand w-full">{link_title}</Button>
        </Link>
    );
};

export default WatchPopupLink;
