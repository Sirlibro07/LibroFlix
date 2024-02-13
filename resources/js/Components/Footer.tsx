import React from "react";
import FooterSocialsSection from "./FooterSocialsSection";

const Footer = ({ className = "", border = true }) => {
    return (
        <footer
            className={`body-padding absolute bottom-0 left-0 w-full flex flex-col items-center gap-y-6 py-11  ${
                border && "border-0 border-t border-grey"
            } md:flex-row  justify-between ${className}`}
        >
            <FooterSocialsSection />
            <p className="text-sm">Website by Fabio</p>
        </footer>
    );
};

export default Footer;
