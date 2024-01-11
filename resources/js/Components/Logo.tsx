import React from "react";
import { Link } from "@inertiajs/react";

const Logo = () => {
    return (
        <Link
            href={route("home")}
            className=" text-brand text-logo font-display py-6"
        >
            Librone
        </Link>
    );
};

export default Logo;
