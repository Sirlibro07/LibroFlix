import React from "react";
import ButtonOptionalIcon from "../Button/ButtonOptionalIcon";
import { Link } from "@inertiajs/react";

export interface MovieButtonsProps {
    title: string;
}

const MovieButtons = ({ title }: MovieButtonsProps) => {
    return (
        <Link href={route("movies.watch", title)}>
            <ButtonOptionalIcon icon_type="solid" icon_name="play">
                Watch Now
            </ButtonOptionalIcon>
        </Link>
    );
};

export default MovieButtons;
