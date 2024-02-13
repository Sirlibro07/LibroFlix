import React from "react";
import Option, { OptionProps } from "./Option";

export interface OptionsListProps extends Omit<OptionProps, "option_name"> {
    options: string[];
    ul_className?: string;
}

const OptionsList = ({
    options,
    ul_className = "",
    currentOption,
    setCurrentOption,
}: OptionsListProps) => {
    return (
        <ul className={`flex gap-6 ${ul_className}`}>
            {options.map((option: string, index: React.Key) => (
                <Option
                    currentOption={currentOption}
                    setCurrentOption={setCurrentOption}
                    option_name={option}
                    key={index}
                />
            ))}
        </ul>
    );
};

export default OptionsList;
