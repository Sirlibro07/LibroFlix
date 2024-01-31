import React, { ReactNode, useState } from "react";
import SliderButton from "./SliderButton";
import SliderContent from "./SliderContent";
import SliderButtons from "./SliderButtons";

interface SliderProps {
    children: ReactNode;
    visible_cards: number;
    total_cards: number;
    title: string;
}

const Slider = ({
    children,
    visible_cards,
    total_cards,
    title,
}: SliderProps) => {
    const [translateX, setTranslateX] = useState(0);

    return (
        <>
            <p className="text-typescale_23_px font-medium mb-6 md:text-typescale_33_px  mt-16 md:mt-[120px]">
                {title}
            </p>
            <section className="relative">
                <SliderContent translateX={translateX}>
                    {children}
                </SliderContent>
                <SliderButtons
                    translateX={translateX}
                    setTranslateX={setTranslateX}
                    visible_cards={visible_cards}
                    total_cards={total_cards}
                />
            </section>
        </>
    );
};

export default Slider;
