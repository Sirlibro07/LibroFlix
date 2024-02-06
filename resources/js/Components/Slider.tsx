import React, { useState } from "react";
import SliderContent from "./SliderContent";
import SliderButtons from "./SliderButtons";

interface SliderProps {
    total_cards: number;
    title: string;
    slider_title_className?: string;
}

const Slider = ({
    total_cards,
    title,
    slider_title_className = "",
}: SliderProps) => {
    const [translateX, setTranslateX] = useState(0);

    return (
        <>
            <p
                className={`text-typescale_23_px font-medium mb-6 md:text-typescale_33_px ${slider_title_className}`}
            >
                {title}
            </p>
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
