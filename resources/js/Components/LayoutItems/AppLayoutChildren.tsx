import React, { ReactNode } from "react";

interface AppLayoutChildrenProps {
    className: string;
    children: ReactNode;
}

const AppLayoutChildren = ({ className, children }: AppLayoutChildrenProps) => {
    return <section className={` ${className}`}>{children}</section>;
};

export default AppLayoutChildren;
