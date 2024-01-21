import React from "react";
import ArrowIcon from "./ArrowIcon";

interface SliderButtonProps {
    direction: string;
}

const SliderButton = ({ direction }: SliderButtonProps) => {
    return (
        <div
            className={`hidden absolute w-[66px] h-[66px] cursor-pointer bg-white ${direction}-0 rounded-full flex justify-center items-center md:flex`}
        >
            <ArrowIcon direction={direction} />
        </div>
    );
};

export default SliderButton;
