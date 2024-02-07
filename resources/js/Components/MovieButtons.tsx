import React from "react";
import ButtonWithIcon from "./ButtonWithIcon";
import Button from "./Button";

const MovieButtons = () => {
    return (
        <>
            <Button className="bg-brand w-full md:hidden">Watch Now</Button>
            <ButtonWithIcon
                icon_type={"solid"}
                icon_name="play"
                className="hidden md:block"
            >
                Watch Now
            </ButtonWithIcon>
        </>
    );
};

export default MovieButtons;
