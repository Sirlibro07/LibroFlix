import React from "react";
import SliderButtonIcon, { SliderButtonIconProps } from "./SliderButtonIcon";

interface SliderButtonProps extends SliderButtonIconProps {
    className: string;
    onClickHandler: () => void;
    visible: boolean;
}

const SliderButton = ({
    className,
    onClickHandler,
    direction,
    visible,
}: SliderButtonProps) => {
    return (
        <button
            onClick={onClickHandler}
            className={`hidden h-full justify-center items-center absolute top-1/2  transform -translate-y-1/2 ${className} ${
                visible ? "lg:flex" : "lg:hidden"
            }`}
        >
            <div
                className={`w-[4.5rem] aspect-square bg-white rounded-full flex justify-center items-center`}
            >
                <SliderButtonIcon direction={direction} />
            </div>
        </button>
    );
};

export default SliderButton;
