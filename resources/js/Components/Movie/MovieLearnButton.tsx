import { Link } from "@inertiajs/react";
import React from "react";
import ButtonWithIcon from "../Button/ButtonWithIcon";

interface MovieLearnButtonProps {
    slug: string;
}

const MovieLearnButton = ({ slug }: MovieLearnButtonProps) => {
    return (
        <Link
            href={route("movies.show", slug)}
            className="w-full bg_brand rounded-10 md:w-fit button-hover"
        >
            <ButtonWithIcon
                icon_className="text-black hidden md:inline"
                icon_type="solid"
                icon_name="arrow-right"
            >
                Learn more
            </ButtonWithIcon>
        </Link>
    );
};

export default MovieLearnButton;
