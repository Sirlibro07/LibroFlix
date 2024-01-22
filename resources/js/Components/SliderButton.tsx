import React from "react";
import ArrowIcon from "./ArrowIcon";
import "../Helpers/CSS/slider_button.css";

interface SliderButtonProps {
    direction: string;
    onCLickHandler: (margin: number) => void;
}

const SliderButton = ({ direction, onCLickHandler }: SliderButtonProps) => {
    return (
        <div
            onClick={() => {
                onCLickHandler(direction === "right" ? -100 : +100);
            }}
            className={`hidden  absolute top-1/2  transform -translate-y-1/2  w-[66px] h-[66px] cursor-pointer  bg-white button-${direction}  rounded-full flex justify-center items-center md:flex`}
        >
            <ArrowIcon direction={direction} />
        </div>
    );
};

export default SliderButton;
