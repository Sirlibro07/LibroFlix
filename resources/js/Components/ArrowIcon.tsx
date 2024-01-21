import React from "react";

interface ArrowIconProps {
    direction: string;
}

const ArrowIcon = ({ direction }: ArrowIconProps) => {
    return (
        <i
            className={`fa-solid fa-arrow-${direction}  text-black text-[28px]`}
        ></i>
    );
};

export default ArrowIcon;
