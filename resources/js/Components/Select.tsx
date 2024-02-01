import React from "react";
import formElementsOnChangeHandler from "@/Helpers/formElementsOnChangeHandler";
import "../Helpers/CSS/select.css";

interface SelectProps {
    setData: React.Dispatch<
        React.SetStateAction<{
            search: string;
            filter: string;
        }>
    >;
}

const Select = ({ setData }: SelectProps) => {
    const filter_options = ["Movies", "Characters"];

    return (
        <>
            <select
                onChange={(e) => {
                    formElementsOnChangeHandler(e, "filter", setData);
                }}
                name="filter"
                id="filter"
                className="h-full  border-0 rounded-10 pr-7 bg-[20] cursor-pointer focus:ring-0 hover:bg-white hover:text-black"
            >
                <option value="All">All</option>
                {filter_options.map((filter_option, index) => (
                    <option key={index} value={filter_option}>
                        {filter_option}
                    </option>
                ))}
            </select>
        </>
    );
};

export default Select;
