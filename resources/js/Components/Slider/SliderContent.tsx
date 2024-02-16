// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination } from "swiper/modules";
// import SliderCard from "./SliderCard";
// import underscoreToSpace from "@/Shared/functions/underscoreToSpace";
// import MovieType from "@/Shared/Types/MovieType";

// export interface SliderContentProps {
//     movies: MovieType[];
// }

// const SliderContent = ({ movies }: SliderContentProps) => {
//     return (
//         <Swiper
//             slidesPerView={4.5}
//             spaceBetween={16}
//             modules={[Pagination]}
//             className="cursor-grab"
//         >
//             {movies.map((movie) => (
//                 <SwiperSlide key={movie.id}>
//                     <SliderCard
//                         thumbnail_path={underscoreToSpace(movie.title)}
//                         title={movie.title}
//                     />
//                 </SwiperSlide>
//             ))}
//         </Swiper>
//     );
// };

// export default SliderContent;

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import SliderCard from "./SliderCard";
import underscoreToSpace from "@/Shared/functions/underscoreToSpace";
import MovieType from "@/Shared/Types/MovieType";

export interface SliderContentProps {
    movies: MovieType[];
}

const SliderContent = ({ movies }: SliderContentProps) => {
    const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

    function getSlidesPerView() {
        const screenWidth = window.innerWidth;
        switch (true) {
            case screenWidth >= 1536:
                return 4.5;
            case screenWidth >= 1024:
                return 3.5;
            case screenWidth >= 640:
                return 2.5;
            default:
                return 1.5;
        }
    }

    useEffect(() => {
        function handleResize() {
            setSlidesPerView(getSlidesPerView());
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={16}
            modules={[Pagination]}
            className="cursor-grab"
        >
            {/* CAN'T PUT THIS INTO SEPARATE COMPONENT BECAUSE THIS LIBRARY SWIPER.JS DOESN'T FEEL LIKE WORKING IF I DO */}
            {movies.map((movie) => (
                <SwiperSlide key={movie.id}>
                    <SliderCard
                        thumbnail_path={underscoreToSpace(movie.title)}
                        title={movie.title}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SliderContent;
