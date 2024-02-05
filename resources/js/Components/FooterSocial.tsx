import React from "react";
import Icon from "./Icon";
import { Link } from "@inertiajs/react";

const FooterSocial = ({ className = "", icon_full_classname }) => {
    return (
        <Link
            className={`border-2 h-[2.5rem] aspect-square rounded-full flex items-center justify-center transitions cursor-pointer hover:scale-105 ${className}`}
            href={""}
        >
            <Icon icon_full_classname={icon_full_classname} />
        </Link>
    );
};

export default FooterSocial;
