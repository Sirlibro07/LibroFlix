import React from "react";
import Icon from "../Global/Icon";

export interface SliderButtonIconProps {
    direction: string;
}

const SliderButtonIcon = ({ direction }: SliderButtonIconProps) => {
    return (
        <Icon
            icon_type="solid"
            icon_name={`arrow-${direction}`}
            className="text-black text-3xl"
        />
    );
};

export default SliderButtonIcon;
