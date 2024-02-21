import React from "react";
import FooterSocialsSection from "./FooterSocialsSection";

const Footer = () => {
    return (
        <footer
            className={`body-padding mt-24 w-full flex flex-col items-center gap-y-6 py-11 border-0 border-t border-grey md:flex-row justify-between`}
        >
            <FooterSocialsSection />
            <p className="text-sm">Website by Fabio</p>
        </footer>
    );
};

export default Footer;
