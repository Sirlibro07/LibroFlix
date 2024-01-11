import React from "react";
import GeneralLink from "./GeneralLink";

const Logo = () => {
    return (
        <GeneralLink
            href={route("home")}
            className="text-brand text-logo font-display py-6"
            border={false}
        >
            Librone
        </GeneralLink>
    );
};

export default Logo;
