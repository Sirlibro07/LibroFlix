import React from "react";

const Select = () => {
    const filter_options = ["Movies", "Characters"];

    const css = (
        <style>
            {`
                    select {
                        -webkit-appearance: none;
                        -moz-appearance: none;
                        appearance: none;
                        background: url('data:image/svg+xml;utf8,<svg fill="%23ffffff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>')
                            no-repeat right center;
                        transition: background-color 0.1s;
                    }

                    select:hover {
                        background: url('data:image/svg+xml;utf8,<svg fill="%23ffffff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z" fill="%23000000"/><path d="M0 0h24v24H0z" fill="none"/></svg>')
                            no-repeat right center;
                        transition: background-color 0.25s;
                    }

                    select option {
                        background: rgba(0, 0, 0, 1);
                        color: white;
                        cursor: pointer;
                    }
                `}
        </style>
    );

    return (
        <>
            <select
                name="filter"
                id="filter"
                className="h-full text-white border-0 rounded-10 pr-7 bg-[20] cursor-pointer focus:ring-0 hover:bg-white hover:text-black"
            >
                {filter_options.map((filter_option, index) => (
                    <option key={index} value={filter_option}>
                        {filter_option}
                    </option>
                ))}
            </select>
            {css}
        </>
    );
};

export default Select;
