import React from "react";
import FooterSocial from "./FooterSocial";

const FooterSocials = () => {
    return (
        <>
            <FooterSocial
                className="mr-3"
                icon_full_classname="fa-brands fa-linkedin"
            />
            <FooterSocial icon_full_classname="fa-brands fa-discord" />
        </>
    );
};

export default FooterSocials;
