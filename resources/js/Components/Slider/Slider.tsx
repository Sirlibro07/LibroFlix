import React, { useState } from "react";
import SliderContent from "./SliderContent";
import SliderButtons from "./SliderButtons";
import SliderTitle, { SliderTitleProps } from "./SliderTitle";

interface SliderProps extends SliderTitleProps {
    total_cards: number;
}

const Slider = ({
    total_cards,
    title,
    slider_title_className = "",
}: SliderProps) => {
    const [translateX, setTranslateX] = useState(0);

    return (
        <>
            <SliderTitle
                title={title}
                slider_title_className={slider_title_className}
            />
            <section className="relative mb-12">
                <SliderContent
                    translateX={translateX}
                    setTranslateX={setTranslateX}
                ></SliderContent>
                <SliderButtons
                    translateX={translateX}
                    setTranslateX={setTranslateX}
                    total_cards={total_cards}
                />
            </section>
        </>
    );
};

export default Slider;
