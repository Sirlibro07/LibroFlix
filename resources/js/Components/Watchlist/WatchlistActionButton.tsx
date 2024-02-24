import React from "react";
import ButtonWithIcon from "../Button/ButtonWithIcon";
import WatchlistForm, { WatchlistFormProps } from "./WatchlistForm";

export interface WatchlistActionButtonProps
    extends Omit<WatchlistFormProps, "children"> {}

const WatchlistActionButton = ({
    watchlisted,
    slug,
    className = "",
}: WatchlistActionButtonProps) => {
    return (
        <WatchlistForm
            slug={slug}
            watchlisted={watchlisted}
            className={className}
        >
            <ButtonWithIcon
                type="submit"
                className="bg-dark"
                icon_type={watchlisted ? "solid" : "regular"}
                icon_name="bookmark"
            >
                {watchlisted ? "in Watchlist" : "Add to Watchlist"}
            </ButtonWithIcon>
        </WatchlistForm>
    );
};

export default WatchlistActionButton;
