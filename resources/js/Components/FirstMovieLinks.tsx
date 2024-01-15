import React from "react";
import GeneralLink from "./GeneralLink";

const FirstMovieLinks = () => {
    return (
        <GeneralLink
            route_name={"home"}
            border={false}
            className="bg-brand font-medium block text-center py-[0.625rem] mt-6 "
        >
            Watch Now
        </GeneralLink>
    );
};

export default FirstMovieLinks;
