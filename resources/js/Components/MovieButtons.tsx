import React from "react";
import ButtonOptionalIcon from "./ButtonOptionalIcon";
import { Link } from "@inertiajs/react";

const MovieButtons = ({ title }) => {
    return (
        <Link href={route("movies.watch", title)}>
            <ButtonOptionalIcon icon_type="solid" icon_name="play">
                Watch Now
            </ButtonOptionalIcon>
        </Link>
    );
};

export default MovieButtons;
