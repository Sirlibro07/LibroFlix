import React from "react";
import ArrowIcon from "./ArrowIcon";

interface SliderButtonProps {
    direction: string;
    visible_cards: number;
    total_cards: number;
    TranslateX: number;
    setTranslateX: (value: React.SetStateAction<number>) => void;
}

const SliderButton = ({
    direction,
    visible_cards,
    total_cards,
    TranslateX,
    setTranslateX,
}: SliderButtonProps) => {
    const current_index = parseInt(Math.abs(TranslateX).toString()[0]);
    const can_go_next =
        (total_cards - visible_cards * current_index) / visible_cards >= 1;

    const nextTranslate = () => {
        can_go_next && setTranslateX((prevState) => prevState - 100);
    };

    const previousTranslate = () => {
        TranslateX < 0 && setTranslateX((prevState) => prevState + 100);
    };

    const executeFunction = () => {
        direction === "right" ? nextTranslate() : previousTranslate();
    };

    const low_brightness_style = "brightness-[20%]";

    const previous_btn_visibility = `${
        current_index == 0 && low_brightness_style
    }`;

    const next_btn_visibility = `${!can_go_next && low_brightness_style}`;

    return (
        <div
            style={
                direction === "right" ? { right: "-17px" } : { left: "-33px" }
            }
            onClick={executeFunction}
            className={`hidden  absolute top-1/2  transform -translate-y-1/2  w-[4.125rem] h-[4.125rem] cursor-pointer  bg-white button-${direction}  rounded-full flex justify-center items-center lg:flex
            ${
                direction === "right"
                    ? next_btn_visibility
                    : previous_btn_visibility
            }`}
        >
            <ArrowIcon direction={direction} />
        </div>
    );
};

export default SliderButton;
