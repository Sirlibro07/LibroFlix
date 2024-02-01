import React from "react";
import SliderButton from "./SliderButton";

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
            <SliderButton
                direction="left"
                TranslateX={translateX}
                setTranslateX={setTranslateX}
                total_cards={total_cards}
            />
            <SliderButton
                TranslateX={translateX}
                direction="right"
                setTranslateX={setTranslateX}
                total_cards={total_cards}
            />
        </>
    );
};

export default SliderButtons;
