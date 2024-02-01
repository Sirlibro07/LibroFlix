import React, { ReactNode, useState } from "react";
import SliderButton from "./SliderButton";
import SliderContent from "./SliderContent";
import SliderButtons from "./SliderButtons";

interface SliderProps {
    children: ReactNode;
    total_cards: number;
    title: string;
}

const Slider = ({ children, total_cards, title }: SliderProps) => {
    const [translateX, setTranslateX] = useState(0);

    return (
        <>
            <p className="text-typescale_23_px font-medium mb-6 md:text-typescale_33_px">
                {title}
            </p>
            <section className="relative mb-12">
                <SliderContent
                    translateX={translateX}
                    setTranslateX={setTranslateX}
                >
                    {children}
                </SliderContent>
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
