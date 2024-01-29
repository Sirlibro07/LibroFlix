import React, { ReactNode, useState } from "react";
import SliderButton from "./SliderButton";

interface SliderProps {
    children: ReactNode;
}

const Slider = ({ children }: SliderProps) => {
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
            <SliderButton direction="left" setTranslateX={setTranslateX} />
            <SliderButton direction="right" setTranslateX={setTranslateX} />
        </section>
    );
};

export default Slider;
