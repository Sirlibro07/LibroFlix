import React from "react";
import ButtonWithIcon from "./ButtonWithIcon";
import { Link } from "@inertiajs/react";
import Button from "./Button";

const FirstMovieLinks = ({ title }) => {
    return (
        <Link href={route("movies.show", title)}>
            <Button className="w-full bg_brand md:hidden">Watch Now</Button>
            <ButtonWithIcon
                icon_type="solid"
                icon_name="plus"
                className="hidden bg_brand md:block"
            >
                Learn More
            </ButtonWithIcon>
        </Link>
    );
};

export default FirstMovieLinks;
