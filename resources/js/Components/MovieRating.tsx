import React from "react";

interface MovieRatingProps {
    rating: number;
    className: string;
}

const MovieRating = ({ rating, className }: MovieRatingProps) => {
    return (
        <ul className={`flex gap-x-2 ${className}`}>
            <li>
                <i className="fa-solid fa-star text-brand text-[1.25rem]"></i>
            </li>
        </ul>
    );
};

export default MovieRating;
