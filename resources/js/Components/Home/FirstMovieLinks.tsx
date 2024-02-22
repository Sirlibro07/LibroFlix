import React from "react";
import { Link } from "@inertiajs/react";
import ButtonOptionalIcon from "../Button/ButtonOptionalIcon";

interface FirstMovieLinksProps {
    slug: string;
}

const FirstMovieLinks = ({ slug }: FirstMovieLinksProps) => {
    return (
        <Link href={route("movies.show", slug)}>
            <ButtonOptionalIcon icon_type="solid" icon_name="play">
                Watch Now
            </ButtonOptionalIcon>
        </Link>
    );
};

export default FirstMovieLinks;
