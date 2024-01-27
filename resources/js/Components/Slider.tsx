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
                    className={`w-full transition-all duration-300 grid gap-4 grid-cols-[repeat(auto-fit,minmax(140px,1fr))] lg:flex lg:items-center `}
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
