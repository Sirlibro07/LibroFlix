import React, { ReactNode } from "react";

interface SliderContentProps {
    children: ReactNode;
    translateX: number;
}

const SliderContent = ({ children, translateX }: SliderContentProps) => {
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
