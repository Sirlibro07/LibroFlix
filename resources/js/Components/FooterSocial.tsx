import React from "react";
import Icon from "./Icon";
import { Link } from "@inertiajs/react";

const FooterSocial = ({ className = "", icon_type, icon_name = "" }) => {
    return (
        <Link
            className={`border-2 h-[2.5rem] aspect-square rounded-full flex items-center justify-center transitions cursor-pointer hover:scale-105 ${className}`}
            href={""}
        >
            <Icon icon_type={icon_type} icon_name={icon_name} />
        </Link>
    );
};

export default FooterSocial;
