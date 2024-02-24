import React from "react";
import Icon from "../Global/Icon";
import WatchlistForm, { WatchlistFormProps } from "./WatchlistForm";

interface WatchlistIconActionProps
    extends Omit<WatchlistFormProps, "children"> {}

const WatchlistIconAction = ({
    slug,
    watchlisted,
    className,
}: WatchlistIconActionProps) => {
    return (
        <WatchlistForm
            slug={slug}
            watchlisted={watchlisted}
            className={className}
        >
            <button className="h-[2.5rem] aspect-square cursor-pointer mt-2 border-2 rounded-full flex justify-center items-center md:hidden">
                <Icon
                    icon_name="bookmark"
                    icon_type={watchlisted ? "solid" : "regular"}
                />
            </button>
        </WatchlistForm>
    );
};

export default WatchlistIconAction;
