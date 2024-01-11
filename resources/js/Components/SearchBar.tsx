import React from "react";
import Input from "./Input";
import SearchBarIcon from "./SearchBarIcon";
import Select from "./Select";
import { useForm } from "@inertiajs/react";
import submit from "@/Helpers/submit";

const SearchBar = () => {
    const { data, setData, get, processing, errors, reset } = useForm({
        search: "",
    });

    return (
        <form
            className={`absolute  top-[5.688rem] mt-6 px-4 w-full  right-0  lg:right-4 lg:px-0 lg:h-fit lg:m-0 lg:w-[350px] lg:top-auto xl:w-searchbar_width 
           `}
        >
            <div className="w-full relative flex items-center">
                <SearchBarIcon className="absolute left-3 text-base" />
                <Input
                    type={"text"}
                    id={"search"}
                    name={"search"}
                    placeholder="Search"
                    value={data.search} //state per il double-binding
                    className={"px-9 lg:h-10"}
                    setData={setData}
                />
                <div className="absolute right-0 h-full flex items-center  ">
                    <div className="w-[0.063rem] h-[calc(100%-1.3rem)] bg-border_color"></div>
                    <Select />
                </div>
            </div>
            <button type="submit" className="hidden"></button>
        </form>
    );
};

export default SearchBar;
// ${isSearchbarVisible && !isMenuVisible ? "block" : "hidden"}
