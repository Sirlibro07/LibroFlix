import { Link } from "@inertiajs/react";
import ButtonOptionalIcon from "../Button/ButtonOptionalIcon";
import React from "react";

export interface MovieWatchNowButtonProps {
    slug: string;
}

const MovieWatchNowButton = ({ slug }: MovieWatchNowButtonProps) => {
    return (
        <Link href={route("movies.watch", slug)}>
            <ButtonOptionalIcon icon_type="solid" icon_name="play">
                Watch Now
            </ButtonOptionalIcon>
        </Link>
    );
};

export default MovieWatchNowButton;
