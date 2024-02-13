import React from "react";

export interface MovieInfoProps {
    date: number;
    className?: string;
}

const MovieInfo = ({ date, className }: MovieInfoProps) => {
    return (
        <div
            className={`flex items-center text-[0.938rem] mt-2 gap-x-[0.25rem]  mb-2 ${className}`}
        >
            <p className="text-grey">Studio Pierrot</p>
            <p className="text-grey">&bull;</p>
            <p className="text-grey">{date}</p>
        </div>
    );
};

export default MovieInfo;
