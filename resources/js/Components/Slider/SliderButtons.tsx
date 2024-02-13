import React from "react";
import LeftSliderbutton from "./LeftSliderbutton";
import RightSliderButton, { RightSliderButtonProps } from "./RightSliderButton";

interface SliderButtonsProps extends RightSliderButtonProps {}

const SliderButtons = ({
    translateX,
    setTranslateX,
    total_cards,
}: SliderButtonsProps) => {
    return (
        <>
            <LeftSliderbutton
                translateX={translateX}
                setTranslateX={setTranslateX}
            />
            <RightSliderButton
                translateX={translateX}
                setTranslateX={setTranslateX}
                total_cards={total_cards}
            />
        </>
    );
};

export default SliderButtons;
