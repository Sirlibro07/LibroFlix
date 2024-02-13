import React from "react";
import GeneralLink from "../Global/GeneralLink";

const Logo = () => {
    return (
        <GeneralLink
            route_name="home"
            className="text-brand text-typescale_28_px font-display"
            border={false}
        >
            Librone
        </GeneralLink>
    );
};

export default Logo;
