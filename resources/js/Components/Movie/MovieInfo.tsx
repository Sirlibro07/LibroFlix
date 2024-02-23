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
            <h4 className="text-grey">Studio Pierrot</h4>
            <h4 className="text-grey">&bull;</h4>
            <h4 className="text-grey">{date}</h4>
        </div>
    );
};

export default MovieInfo;
