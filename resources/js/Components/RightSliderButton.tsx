import React, { useEffect, useState } from "react";
import SliderButton from "./SliderButton";

interface RightSliderButtonProps {
    translateX: number;
    setTranslateX: React.Dispatch<React.SetStateAction<number>>;
    total_cards: number;
}

const RightSliderButton = ({
    translateX,
    setTranslateX,
    total_cards,
}: RightSliderButtonProps) => {
    const [visibleCards, setVisibleCards] = useState(
        window.innerWidth < 1536 ? 4 : 5
    );
    useEffect(() => {
        const handleWindowResize = () => {
            setVisibleCards(window.innerWidth < 1536 ? 4 : 5);
        };

        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    const current_index = parseInt(Math.abs(translateX).toString()[0]);
    const can_go_next =
        (total_cards - visibleCards * current_index) / visibleCards >= 1.2;

    const nextTranslate = () => {
        can_go_next && setTranslateX((prevState) => prevState - 100);
    };
    return (
        <SliderButton
            onClickHandler={nextTranslate}
            className="right-0 mr-[calc(-4.5rem/2+20px)]"
            direction="right"
            visible={can_go_next}
        />
    );
};

export default RightSliderButton;
