import React, { ReactNode, useState } from "react";
import SliderButton from "./SliderButton";

interface SliderProps {
    children: ReactNode;
    visible_cards: number;
}

const Slider = ({ children, visible_cards }: SliderProps) => {
    const [translateX, setTranslateX] = useState(0);

    return (
        <section className="relative">
            <div className="overflow-hidden">
                <div
                    style={{ transform: `translateX(${translateX}%)` }}
                    className={`hidden w-full transition-all gap-4 duration-300 lg:flex `}
                >
                    {children}
                </div>
            </div>
            <SliderButton
                direction="left"
                TranslateX={translateX}
                setTranslateX={setTranslateX}
                visible_cards={visible_cards}
            />
            <SliderButton
                TranslateX={translateX}
                direction="right"
                setTranslateX={setTranslateX}
                visible_cards={visible_cards}
            />
        </section>
    );
};

export default Slider;
