import React from "react";
import SliderButton from "./SliderButton";

interface SliderButtonsProps {
    translateX: number;
    setTranslateX: React.Dispatch<React.SetStateAction<number>>;
    visible_cards: number;
    total_cards: number;
}

const SliderButtons = ({
    translateX,
    setTranslateX,
    visible_cards,
    total_cards,
}: SliderButtonsProps) => {
    return (
        <>
            <SliderButton
                direction="left"
                TranslateX={translateX}
                setTranslateX={setTranslateX}
                visible_cards={visible_cards}
                total_cards={total_cards}
            />
            <SliderButton
                TranslateX={translateX}
                direction="right"
                setTranslateX={setTranslateX}
                visible_cards={visible_cards}
                total_cards={total_cards}
            />
        </>
    );
};

export default SliderButtons;
