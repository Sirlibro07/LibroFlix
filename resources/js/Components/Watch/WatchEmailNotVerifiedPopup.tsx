import React from "react";
import WatchPopup from "./WatchPopup";

const WatchEmailNotVerifiedPopup = () => {
    return (
        <WatchPopup
            icon_name="hand"
            icon_className="ml-[-0.063rem]"
            title="Email Not Verified"
            message="It seems like your account email is not verified, to watch
                    movies you will need to verify it"
            link_title="Verify email"
            link_route_name="profile.edit"
        />
    );
};

export default WatchEmailNotVerifiedPopup;