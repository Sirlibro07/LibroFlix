import React from "react";
import FooterSocial from "./FooterSocial";

const FooterSocials = () => {
    return (
        <>
            <FooterSocial
                className="mr-3"
                icon_type="brands"
                icon_name="linkedin"
                link_url="https://www.linkedin.com/in/fabio-carminati-web-developer/"
            />
            {/* <FooterSocial icon_type="brands" icon_name="discord" /> */}
        </>
    );
};

export default FooterSocials;
