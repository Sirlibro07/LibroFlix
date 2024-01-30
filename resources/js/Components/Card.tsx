import { Link } from "@inertiajs/react";
import React, { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
    route_name: string;
    visible_cards: number;
    apply_css?: boolean;
}

const Card = ({
    children,
    className = "",
    route_name,
    visible_cards,
    apply_css = true,
}: CardProps) => {
    return (
        <>
            <Link
                className={`card group relative cursor-pointer aspect-card transition-all duration-300 
                md:hover:scale-95 lg:shrink-0 ${className}`}
                href={route(route_name)}
            >
                {children}
            </Link>
            {apply_css && (
                <style>{`
            .card
            {
                @media(min-width:1024px)
                {
                    width: calc(100%/${visible_cards} - 1rem)
                }
            }
            `}</style>
            )}
        </>
    );
};

export default Card;
