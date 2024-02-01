import React from "react";
import Icon from "./Icon";

interface ArrowIconProps {
    direction: string;
}

const ArrowIcon = ({ direction }: ArrowIconProps) => {
    return <Icon icon={`arrow-${direction}`} className="text-black text-2xl" />;
};

export default ArrowIcon;
