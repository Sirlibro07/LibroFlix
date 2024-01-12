import React, { useContext } from "react";
import Input from "./Input";
import SearchBarIcon from "./SearchBarIcon";
import Select from "./Select";
import { router, useForm } from "@inertiajs/react";
import Menu_Searchbar_Context from "@/Contexts/Menu_Searchbar_Context";

const SearchBar = () => {
    const { data, setData, get, processing, errors, reset } = useForm({
        search: "",
        filter: "Movies",
    });

    const isMenuVisible = useContext(Menu_Searchbar_Context).isMenuVisible;

    const isSearchbarVisible = useContext(
        Menu_Searchbar_Context
    ).isSearchbarVisible;

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                router.get(route("lol", "sup"));
            }}
            className={`absolute z-10 top-[5.688rem] mt-6 px-4 w-full  right-0  lg:right-4 lg:px-0 lg:h-fit lg:m-0 lg:w-[350px] lg:top-auto xl:w-searchbar_width 
           ${isSearchbarVisible && !isMenuVisible ? "flex" : "hidden"}`}
        >
            <div className="w-full relative flex items-center">
                <SearchBarIcon className="absolute left-3 text-base" />
                <Input
                    type={"text"}
                    id={"search"}
                    name={"search"}
                    placeholder="Search"
                    value={data.search}
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
