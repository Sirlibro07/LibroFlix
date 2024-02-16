import React, { ReactNode } from "react";
import Header from "../Global/Header";

export interface AppLayoutChildrenProps {
    className?: string;
    children: ReactNode;
    header_name?: string;
    header_className?: string;
}

const AppLayoutChildren = ({
    className = "",
    children,
    header_name = "",
    header_className = "",
}: AppLayoutChildrenProps) => {
    return (
        <section className={`${className}`}>
            {header_name && (
                <Header name={header_name} className={header_className} />
            )}
            {children}
        </section>
    );
};

export default AppLayoutChildren;
