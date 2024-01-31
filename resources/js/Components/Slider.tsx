import React, { ReactNode, useState } from "react";
import SliderButton from "./SliderButton";

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
                <div className="overflow-hidden">
                    <div
                        style={{ transform: `translateX(${translateX}%)` }}
                        className={`slider_content flex w-full  transition-all gap-4 duration-300  `}
                    >
                        {children}
                    </div>
                </div>
                <style>{`@media(max-width:1024px)
                {
                    .slider_content
                    {
                        overflow-x: scroll
                    }
                }`}</style>
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
            </section>
        </>
    );
};

export default Slider;
