import React, { ReactNode } from "react";
import Navbar from "./Navbar";

interface AppLayoutChildrenProps {
    isMenuVisible: boolean;
    isSearchbarVisible: boolean;
    className: string;
    children: ReactNode;
}

const AppLayoutChildren = ({
    isMenuVisible,
    isSearchbarVisible,
    className,
    children,
}: AppLayoutChildrenProps) => {
    return (
        <>
            <Navbar />
            <section className={`px-mobile_side_padding  ${className}`}>
                {children}
            </section>
        </>
    );
};

export default AppLayoutChildren;
