import React from "react";
import Icon from "../Global/Icon";

const WatchPopupIcon = ({ icon_name, icon_className = "" }) => {
    return (
        <div className="w-[5.313rem] h-[5.313rem] mb-4 mt-[-2.813rem] bg-white rounded-full flex justify-center items-center">
            <Icon
                icon_type={"solid"}
                icon_name={icon_name}
                className={`text-dark text-5xl ${icon_className}`}
            />
        </div>
    );
};

export default WatchPopupIcon;
