import React from "react";
import { ReactNode } from "react";

interface GridProps {
    children: ReactNode;
}

const Grid = ({ children }: GridProps) => {
    return (
        <div
            className={`w-full transition-all duration-300 grid gap-4 grid-cols-[repeat(auto-fit,minmax(140px,1fr))] lg:hidden `}
        >
            {children}
        </div>
    );
};

export default Grid;
