import React from "react";
import LeftSliderbutton from "./LeftSliderbutton";
import RightSliderButton from "./RightSliderButton";

interface SliderButtonsProps {
    translateX: number;
    setTranslateX: React.Dispatch<React.SetStateAction<number>>;
    total_cards: number;
}

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
