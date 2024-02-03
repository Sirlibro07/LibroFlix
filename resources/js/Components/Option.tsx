import React from "react";

interface OptionProps {
    currentOption: string;
    setCurrentOption: React.Dispatch<React.SetStateAction<string>>;
    option_name: string;
}

const Option = ({
    currentOption,
    setCurrentOption,
    option_name,
}: OptionProps) => {
    return (
        <li
            onClick={() => {
                option_name !== currentOption && setCurrentOption(option_name);
            }}
        >
            <button
                className={`custom_border  relative ${
                    currentOption === option_name
                        ? "text-white custom_border_active"
                        : "text-grey"
                } font-normal`}
            >
                {option_name}
            </button>
        </li>
    );
};

export default Option;
