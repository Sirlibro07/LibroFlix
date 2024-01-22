import React, { ReactNode, useState } from "react";
import SliderButton from "./SliderButton";

interface SliderProps {
    children: ReactNode;
}

const Slider = ({ children }: SliderProps) => {
    const [translateX, setTranslateX] = useState(0);

    const onCLickHandler = (margin: number) => {
        setTranslateX((prevState) => prevState + margin);
    };

    return (
        <>
            <section className="relative">
                <div className="overflow-hidden">
                    <div
                        style={{ transform: `translateX(${translateX}%)` }}
                        className={`w-fit transition-all duration-300 grid grid-cols-2 gap-4 xs:grid-cols-3 md:flex md:items-center `}
                    >
                        {children}
                    </div>
                </div>
                <SliderButton
                    direction="left"
                    onCLickHandler={onCLickHandler}
                />
                <SliderButton
                    direction="right"
                    onCLickHandler={onCLickHandler}
                />
            </section>
        </>
    );
};

export default Slider;
