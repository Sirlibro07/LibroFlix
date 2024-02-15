import { Link } from "@inertiajs/react";
import ButtonOptionalIcon from "../Button/ButtonOptionalIcon";
import React from "react";

export interface MovieWatchNowProps {
    title: string;
}

const MovieWatchNow = ({ title }: MovieWatchNowProps) => {
    return (
        <Link href={route("movies.watch", title)}>
            <ButtonOptionalIcon icon_type="solid" icon_name="play">
                Watch Now
            </ButtonOptionalIcon>
        </Link>
    );
};

export default MovieWatchNow;
