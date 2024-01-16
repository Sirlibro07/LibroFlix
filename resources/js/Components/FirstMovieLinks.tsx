import React from "react";
import GeneralLink from "./GeneralLink";
import GeneralLinkWithIcon from "./GeneralLinkWithIcon";

const FirstMovieLinks = () => {
    return (
        <>
            <GeneralLink
                route_name={"home"}
                border={false}
                className="bg-brand font-medium block text-center py-[0.625rem] mt-6 md:hidden "
            >
                Watch Now
            </GeneralLink>
            <div className="w-full   flex gap-x-5">
                <GeneralLinkWithIcon
                    route_name={"home"}
                    className="bg-brand"
                    icon="play"
                >
                    Play
                </GeneralLinkWithIcon>
                <GeneralLinkWithIcon
                    route_name={"home"}
                    className="bg-secondary"
                    icon="plus"
                >
                    Learn More
                </GeneralLinkWithIcon>
            </div>
        </>
    );
};

export default FirstMovieLinks;
