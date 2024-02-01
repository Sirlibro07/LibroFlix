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
}: CardProps) => {
    return (
        <>
            <Link
                className={`card group w-full max-w-[250px] lg:max-w-none shrink-0 relative aspect-card 
                hover-shrink ${className}`}
                href={route(route_name)}
            >
                {children}
            </Link>
            <style>{`
            .card
            {
                @media(min-width:1024px)
                {
                    width: calc(100%/${visible_cards} - 1rem)
                }
            }
            `}</style>
        </>
    );
};

export default Card;
