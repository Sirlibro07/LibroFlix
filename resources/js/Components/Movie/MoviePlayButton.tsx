import { Link } from "@inertiajs/react";
import ButtonOptionalIcon from "../Button/ButtonOptionalIcon";
import React from "react";

interface MoviePlayButtonProps {
    slug: string;
}

const MoviePlayButton = ({ slug }: MoviePlayButtonProps) => {
    return (
        <Link href={route("movies.watch", slug)}>
            <ButtonOptionalIcon icon_type="solid" icon_name="play">
                Watch Now
            </ButtonOptionalIcon>
        </Link>
    );
};

export default MoviePlayButton;
