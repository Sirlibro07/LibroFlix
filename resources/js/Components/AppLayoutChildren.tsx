import React, { ReactNode } from "react";
import Navbar from "./Navbar";

interface AppLayoutChildrenProps {
    isMenuVisible: boolean;
    isSearchbarVisible: boolean;
    className: string;
    children: ReactNode;
}

const AppLayoutChildren = ({ className, children }: AppLayoutChildrenProps) => {
    return (
        <>
            <Navbar />
            <section
                className={`px-mobile_side_padding md:px-10 lg:px-20 ${className}`}
            >
                {children}
            </section>
        </>
    );
};

export default AppLayoutChildren;
