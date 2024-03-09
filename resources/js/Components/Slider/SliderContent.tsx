import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import SliderCard from "./SliderCard";
import underscoreToSpace from "@/Helpers/functions/global/underscoreToSpace";
import MovieType from "@/Helpers/Types/MovieType";
import useWindowResize from "@/Hooks/useWindowResize";

export interface SliderContentProps {
    movies: MovieType[];
}

const SliderContent = ({ movies }: SliderContentProps) => {
    function getSlidesPerView() {
        const screenWidth = useWindowResize();

        const breakpoints = [
            { minWidth: 1536, slidesPerView: 4.5 },
            { minWidth: 1024, slidesPerView: 3.5 },
            { minWidth: 640, slidesPerView: 2.5 },
            { minWidth: 0, slidesPerView: 1.5 },
        ];

        for (let i = 0; i < breakpoints.length; i++) {
            if (screenWidth >= breakpoints[i].minWidth) {
                return breakpoints[i].slidesPerView;
            }
        }

        return 1.5;
    }

    return (
        <Swiper
            slidesPerView={getSlidesPerView()}
            spaceBetween={16}
            modules={[Pagination]}
            className="cursor-grab"
        >
            {/* CAN'T PUT THIS INTO SEPARATE COMPONENT BECAUSE THIS LIBRARY SWIPER.JS DOESN'T FEEL LIKE WORKING IF I DO */}
            {movies.map((movie) => (
                <SwiperSlide key={movie.id}>
                    <SliderCard
                        thumbnail_path={underscoreToSpace(movie.title)}
                        slug={movie.slug}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SliderContent;
