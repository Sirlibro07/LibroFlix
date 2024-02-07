import React from "react";
import { Link } from "@inertiajs/react";
import ButtonOptionalIcon from "./ButtonOptionalIcon";

const FirstMovieLinks = ({ title }) => {
    return (
        <Link href={route("movies.show", title)}>
            <ButtonOptionalIcon icon_type="solid" icon_name="play">
                Watch Now
            </ButtonOptionalIcon>
        </Link>
    );
};

export default FirstMovieLinks;
