import React from "react";

type option = { name: string };

interface OptionsListProps {
    options: option[];
    ul_className?: string;
    setCurrentOption: any;
}

const OptionsList = ({
    options,
    ul_className = "",
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
                    <button className="custom_border relative text-white font-normal">
                        {option.name}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default OptionsList;
