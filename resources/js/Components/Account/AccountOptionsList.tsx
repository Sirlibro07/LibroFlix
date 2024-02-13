import React from "react";
import OptionsList from "../Option/OptionsList";

const AccountOptionsList = ({ currentOption, setCurrentOption }) => {
    return (
        <OptionsList
            options={[
                { name: "Profile" },
                { name: "Password" },
                { name: "Other" },
            ]}
            currentOption={currentOption}
            setCurrentOption={setCurrentOption}
            ul_className="mt-8 mb-16"
        />
    );
};

export default AccountOptionsList;
