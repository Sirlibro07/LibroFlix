import React from "react";
import PopupLayout from "@/Layouts/PopupLayout";
import { PopupProps } from "@/Components/Popup/Popup";

interface WatchProps {
    has_verified_email: boolean;
    movie_title: string;
}

const Watch = ({ has_verified_email, movie_title }: WatchProps) => {
    let popup_props: PopupProps;
    let message: string;
    if (has_verified_email) {
        message = `As this is only a portfolio to demonstrate my full-stack web dev skills, I do not have the legal rights to actually stream the "${movie_title}" film, thanks for your understanding.`;

        popup_props = {
            icon_name: "film",
            title: "I'm sorry",
            message: message,
        };
    } else {
        message =
            "It seems like your account email is not verified, to watch movies you will need to verify it";

        popup_props = {
            icon_name: "hand",
            title: "Email not verified",
            message: message,
            icon_className: "ml-[-0.063rem]",
            link_title: "Verify email",
            link_route_name: "profile.edit",
        };
    }

    return (
        <PopupLayout
            head_title="Watch"
            icon_name={popup_props.icon_name}
            title={popup_props.title}
            message={popup_props.message}
            icon_className={popup_props.icon_className}
            link_route_name={popup_props.link_route_name}
            link_title={popup_props.link_title}
        />
    );
};

export default Watch;
