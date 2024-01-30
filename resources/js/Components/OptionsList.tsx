import React from "react";
import Option from "./Option";

type option = { name: string };

interface OptionsListProps {
    options: option[];
    ul_className?: string;
    currentOption: string;
    setCurrentOption: React.Dispatch<React.SetStateAction<string>>;
}

const OptionsList = ({
    options,
    ul_className = "",
    currentOption,
    setCurrentOption,
}: OptionsListProps) => {
    return (
        <ul className={`flex gap-6 ${ul_className}`}>
            {options.map((option: option, index: React.Key) => (
                <Option
                    currentOption={currentOption}
                    setCurrentOption={setCurrentOption}
                    option_name={option.name}
                    key={index}
                />
            ))}
        </ul>
    );
};

export default OptionsList;
