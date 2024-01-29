import React from "react";
import ArrowIcon from "./ArrowIcon";
import "../Helpers/CSS/slider_button.css";

interface SliderButtonProps {
    direction: string;
    TranslateX: number;
    setTranslateX: (value: React.SetStateAction<number>) => void;
}

const SliderButton = ({
    direction,
    TranslateX,
    setTranslateX,
}: SliderButtonProps) => {
    const nextTranslate = () => {
        setTranslateX((prevState) => prevState - 100);
    };

    const previousTranslate = () => {
        TranslateX < 0 ? setTranslateX((prevState) => prevState + 100) : "";
    };

    const executeFunction = () => {
        direction === "right" ? nextTranslate() : previousTranslate();
    };

    return (
        <div
            onClick={executeFunction}
            className={`hidden  absolute top-1/2  transform -translate-y-1/2  w-[4.125rem] h-[4.125rem] cursor-pointer  bg-white button-${direction}  rounded-full flex justify-center items-center lg:flex`}
        >
            <ArrowIcon direction={direction} />
        </div>
    );
};

export default SliderButton;
