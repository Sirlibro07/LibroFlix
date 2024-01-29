import { Link } from "@inertiajs/react";
import React, { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className: string;
    route_name: string;
    cards_number: string;
}

const Card = ({ children, className, route_name, cards_number }: CardProps) => {
    return (
        <>
            <Link
                className={`slider group relative cursor-pointer aspect-card transition-all duration-300 
                md:hover:scale-95 lg:shrink-0 ${className}`}
                href={route(route_name)}
            >
                {children}
            </Link>
            <style>{`.slider
            {
                @media(min-width:1024px)
                {
                    width: calc(100%/${cards_number} - 1rem)
                }
            }`}</style>
        </>
    );
};

export default Card;
