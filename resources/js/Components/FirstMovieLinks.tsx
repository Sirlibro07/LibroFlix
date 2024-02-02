import React from "react";
import GeneralLink from "./GeneralLink";
import GeneralLinkWithIcon from "./GeneralLinkWithIcon";

const FirstMovieLinks = ({ title }) => {
    return (
        <>
            <GeneralLink
                route_name={"home"}
                border={false}
                className="bg-brand font-medium block text-center py-[0.625rem] mt-6 md:hidden "
            >
                Watch Now
            </GeneralLink>
            <div className="w-full  gap-x-5 hidden md:flex ">
                <GeneralLinkWithIcon
                    route_name={`movies.show`}
                    route_parameter={title}
                    className="bg-brand"
                    icon="plus"
                >
                    Learn More
                </GeneralLinkWithIcon>
            </div>
        </>
    );
};

export default FirstMovieLinks;
