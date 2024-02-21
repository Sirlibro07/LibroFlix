import React from "react";
import FooterSocialsSection from "./FooterSocialsSection";

export interface FooterProps {
    footer_border?: boolean;
    footer_margin_top?: boolean;
}

const Footer = ({
    footer_border = true,
    footer_margin_top = true,
}: FooterProps) => {
    return (
        <footer
            className={`body-padding w-full flex flex-col items-center gap-y-6 py-11 ${
                footer_border && "border-0 border-t border-grey"
            } md:flex-row justify-between ${footer_margin_top && "mt-24"}`}
        >
            <FooterSocialsSection />
            <p className="text-sm">Website by Fabio</p>
        </footer>
    );
};

export default Footer;
