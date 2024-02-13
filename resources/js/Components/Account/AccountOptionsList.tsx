import React from "react";
import OptionsList, { OptionsListProps } from "../Option/OptionsList";

interface AccountOptionsListProps
    extends Omit<OptionsListProps, "ul_className" | "options"> {}

const AccountOptionsList = ({
    currentOption,
    setCurrentOption,
}: AccountOptionsListProps) => {
    return (
        <OptionsList
            options={["Profile", "Password", "Other"]}
            currentOption={currentOption}
            setCurrentOption={setCurrentOption}
            ul_className="mt-8 mb-16"
        />
    );
};

export default AccountOptionsList;
