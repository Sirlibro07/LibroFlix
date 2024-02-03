import React from "react";
import ButtonWithIcon from "./ButtonWithIcon";
import { Link } from "@inertiajs/react";
import Button from "./Button";

const FirstMovieLinks = ({ title }) => {
    return (
        <Link className="" href={route("movies.show", title)}>
            <Button className="w-full bg-brand md:hidden">Watch Now</Button>
            <ButtonWithIcon className="hidden md:block">
                Learn More
            </ButtonWithIcon>
        </Link>
    );
};

export default FirstMovieLinks;
