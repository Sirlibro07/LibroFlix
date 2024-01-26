import React from "react";
import FirstMovie from "./FirstMovie";
import MoviesSlider from "./MoviesSlider";
import getBackgroundImg from "@/Helpers/getBackgroundImg";

const MoviesIndexContent = () => {
    const img = (version: string) => {
        return getBackgroundImg("first_movie", version);
    };

    const body_styles = `
    body {
        background-image: url("${img("mobile")}");
        background-repeat: no-repeat;
        background-size: 100%;
        background-position-y: 90px;
        background-position-x: 55%;
        background-color: black;
    }

    @media (min-width: 768px) {
        body {
            background-image: url("${img("tablet")}");
        }
    }

    @media (min-width: 1024px) {
        body {
            background-image: url("${img("laptop")}");
        }
    }

    @media (min-width: 1536px) {
        body {
            background-image: url("${img("desktop")}");
        }
    }
`;

    return (
        <>
            <div className={`w-full text-white mt-[9rem]`}>
                <FirstMovie />
                <MoviesSlider
                    movies={[
                        { thumbnail_path: "Land" },
                        { thumbnail_path: "Land" },
                    ]}
                />
            </div>
            <style>{body_styles}</style>
        </>
    );
};

export default MoviesIndexContent;
