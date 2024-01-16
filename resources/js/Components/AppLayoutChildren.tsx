import React, { ReactNode } from "react";
import Navbar from "./Navbar";

interface AppLayoutChildrenProps {
    className: string;
    children: ReactNode;
}

const AppLayoutChildren = ({ className, children }: AppLayoutChildrenProps) => {
    return (
        <>
            <Navbar />
            <section className={`body-padding ${className}`}>
                {children}
            </section>
        </>
    );
};

export default AppLayoutChildren;
