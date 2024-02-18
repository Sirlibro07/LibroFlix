import { Link } from "@inertiajs/react";
import ButtonOptionalIcon from "../Button/ButtonOptionalIcon";
import React from "react";

export interface MovieWatchNowProps {
    slug: string;
}

const MovieWatchNow = ({ slug }: MovieWatchNowProps) => {
    return (
        <Link href={route("movies.watch", slug)}>
            <ButtonOptionalIcon icon_type="solid" icon_name="play">
                Watch Now
            </ButtonOptionalIcon>
        </Link>
    );
};

export default MovieWatchNow;
