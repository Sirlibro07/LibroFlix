import React from "react";
import SliderButton from "./SliderButton";

interface LeftSliderbuttonProps {
    translateX: number;
    setTranslateX: React.Dispatch<React.SetStateAction<number>>;
}

const LeftSliderbutton = ({
    translateX,
    setTranslateX,
}: LeftSliderbuttonProps) => {
    const can_go_previous = translateX < 0;

    const previousTranslate = () => {
        can_go_previous && setTranslateX((prevState) => prevState + 100);
    };
    return (
        <SliderButton
            onClickHandler={previousTranslate}
            className="left-[calc(-4.5rem/2)]"
            direction="left"
            visible={can_go_previous}
        />
    );
};

export default LeftSliderbutton;
