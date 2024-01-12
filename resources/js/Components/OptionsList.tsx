import React from "react";

type option = { name: string };

interface OptionsListProps {
    options: option[];
    ul_className?: string;
    currentOption: string;
    setCurrentOption: any;
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
                <li
                    key={index}
                    onClick={() => {
                        setCurrentOption(option.name);
                    }}
                >
                    <button
                        className={`custom_border  relative ${
                            currentOption === option.name
                                ? "text-white custom_border_active"
                                : "text-unused_link_option_color"
                        } font-normal`}
                    >
                        {option.name}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default OptionsList;
