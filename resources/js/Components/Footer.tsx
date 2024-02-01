import React from "react";
import FooterSocialsSection from "./FooterSocialsSection";

const Footer = () => {
    return (
        <footer className="body-padding flex flex-col items-center gap-y-6 py-11 z-[100] mt-[200px] border-0 border-t border-border_color lg:flex-row  justify-between">
            <FooterSocialsSection />
            <p className="text-sm">Website by Fabio</p>
        </footer>
    );
};

export default Footer;
