import React from "react";

interface MovieInfoProps {
    date: string;
}

const MovieInfo = ({ date }: MovieInfoProps) => {
    return (
        <div className="flex items-center justify-center gap-x-2 text-typescale_19_px mt-4 mb-2">
            <p className="font-medium ">Studio Pierrot</p>
            <div className="w-[7px] h-[7px] bg-light_color rounded-full"></div>
            <p className="text-light_color">{date}</p>
        </div>
    );
};

export default MovieInfo;