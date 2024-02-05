import React, { useContext, useEffect } from "react";
import "@/CSS/slider_content.css";
import SliderCard from "./SliderCard";
import MoviesContext from "@/Contexts/MoviesContext";
import underscoreToSpace from "@/Shared/underscoreToSpace";

interface SliderContentProps {
    translateX: number;
    setTranslateX: React.Dispatch<React.SetStateAction<number>>;
}

const SliderContent = ({ translateX, setTranslateX }: SliderContentProps) => {
    useEffect(() => {
        const handleResize = () => {
            window.innerWidth > 1023 && setTranslateX(0);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const movies = useContext(MoviesContext).data;

    return (
        <div className="overflow-hidden">
            <div
                style={{ transform: `translateX(${translateX}%)` }}
                className={`slider_content flex w-full  transition-all gap-4 duration-300 pb-4  `}
            >
                {movies.map((movie) => (
                    <SliderCard
                        key={movie.id}
                        thumbnail_path={underscoreToSpace(movie.title)}
                        title={movie.title}
                    />
                ))}
            </div>
        </div>
    );
};

export default SliderContent;
