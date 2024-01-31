import React, { ReactNode, useEffect, useState } from "react";

interface SliderContentProps {
    children: ReactNode;
    translateX: number;
    setTranslateX: React.Dispatch<React.SetStateAction<number>>;
}

const SliderContent = ({
    children,
    translateX,
    setTranslateX,
}: SliderContentProps) => {
    useEffect(() => {
        const handleResize = () => {
            window.innerWidth > 1023 && setTranslateX(0);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <>
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
        </>
    );
};

export default SliderContent;
