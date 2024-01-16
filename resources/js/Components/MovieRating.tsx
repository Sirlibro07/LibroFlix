import React from "react";

interface MovieRatingProps {
    rating: number;
    className: string;
}

const MovieRating = ({ rating, className }: MovieRatingProps) => {
    const integer = Math.floor(rating);
    const decimal = rating - integer;

    const newArray = Array.from({ length: integer }, (_, index) => index);

    console.log(newArray);

    return (
        <ul className={`flex gap-x-2 ${className}`}>
            {newArray.map((_, index) => (
                <li key={index}>
                    <i className="fa-solid fa-star text-brand text-[1.25rem]"></i>
                </li>
            ))}
            {decimal > 0 && decimal < 0.5 && (
                <i className="fa-solid fa-star-half-stroke text-brand text-[1.25rem]"></i>
            )}
        </ul>
    );
};

export default MovieRating;
