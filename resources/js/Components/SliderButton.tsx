import React, { useEffect, useState } from "react";
import ArrowIcon from "./ArrowIcon";

interface SliderButtonProps {
    direction: string;
    total_cards: number;
    TranslateX: number;
    setTranslateX: (value: React.SetStateAction<number>) => void;
}

const SliderButton = ({
    direction,
    total_cards,
    TranslateX,
    setTranslateX,
}: SliderButtonProps) => {
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

    const are_buttons_visible = total_cards > visibleCards;

    const current_index = parseInt(Math.abs(TranslateX).toString()[0]);
    const can_go_next =
        (total_cards - visibleCards * current_index) / visibleCards >= 1.2;

    const nextTranslate = () => {
        can_go_next && setTranslateX((prevState) => prevState - 100);
    };

    const previousTranslate = () => {
        TranslateX < 0 && setTranslateX((prevState) => prevState + 100);
    };

    const executeFunction = () => {
        direction === "right" ? nextTranslate() : previousTranslate();
    };

    const low_brightness_style = "brightness-[20%] cursor-default";

    const previous_btn_visibility = `${
        current_index == 0 && low_brightness_style
    }`;

    const next_btn_visibility = `${!can_go_next && low_brightness_style}`;

    return (
        <button
            onClick={executeFunction}
            style={
                direction === "right" ? { right: "-17px" } : { left: "-33px" }
            }
            className={`hidden h-full items-center  absolute top-1/2  transform -translate-y-1/2 ${
                are_buttons_visible && "lg:flex"
            } ${
                direction === "right"
                    ? next_btn_visibility
                    : previous_btn_visibility
            }`}
        >
            <div
                className={`w-[3.5rem] h-[3.5rem]  bg-white button-${direction}  rounded-full flex justify-center items-center xl:scale-[130%]
            `}
            >
                <ArrowIcon direction={direction} />
            </div>
        </button>
    );
};

export default SliderButton;
