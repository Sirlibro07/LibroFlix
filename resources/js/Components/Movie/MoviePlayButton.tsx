import { Link } from "@inertiajs/react";
import React from "react";
import ButtonWithIcon from "../Button/ButtonWithIcon";

interface MoviePlayButtonProps {
    slug: string;
    className?: string;
    icon_className?: string;
}

const MoviePlayButton = ({
    slug,
    className = "",
    icon_className,
}: MoviePlayButtonProps) => {
    return (
        <Link
            href={route("movies.watch", slug)}
            className={`bg_brand rounded-10 button-hover ${className}`}
        >
            <ButtonWithIcon
                icon_type="solid"
                icon_name="play"
                icon_className={`text-black ${icon_className}`}
            >
                Watch now
            </ButtonWithIcon>
        </Link>
    );
};

export default MoviePlayButton;
