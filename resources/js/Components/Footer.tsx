import React, { useContext } from "react";
import FooterSocialsSection from "./FooterSocialsSection";
import Menu_Searchbar_Context from "@/Contexts/Menu_Searchbar_Context";

const Footer = ({ className = "" }) => {
    const { isMenuVisible } = useContext(Menu_Searchbar_Context);
    const { isSearchbarVisible } = useContext(Menu_Searchbar_Context);

    return (
        <footer
            className={`body-padding flex flex-col items-center gap-y-6 py-11 z-[100] mt-[12.5rem] border-0 border-t border-grey lg:flex-row  justify-between ${
                isMenuVisible || isSearchbarVisible ? "brightness-[30%]" : ""
            } ${className}`}
        >
            <FooterSocialsSection />
            <p className="text-sm">Website by Fabio</p>
        </footer>
    );
};

export default Footer;
