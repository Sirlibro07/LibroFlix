import React, { useContext, useState } from "react";
import Input from "./Input";
import SearchIcon from "./SearchIcon";
import Select from "./Select";
import { router } from "@inertiajs/react";
import Menu_Searchbar_Context from "@/Contexts/Menu_Searchbar_Context";

const SearchBar = () => {
    const [data, setData] = useState({
        search: "",
        filter: "All",
    });

    const isMenuVisible = useContext(Menu_Searchbar_Context).isMenuVisible;

    const isSearchbarVisible = useContext(
        Menu_Searchbar_Context
    ).isSearchbarVisible;

    const visibility_styles =
        isSearchbarVisible && !isMenuVisible
            ? "navbar_item_visible"
            : "navbar_item_not_visible";

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                router.get(route("search", [data.search, data.filter]));
            }}
            className={`absolute z-10 top-[5.688rem] mt-6 px-4 w-full  right-0  lg:static lg:px-0 lg:h-fit lg:m-0 lg:w-[20rem] xl:w-searchbar_width  lg:top-auto
           ${visibility_styles}`}
        >
            <div className="w-full relative flex items-center">
                <SearchIcon className="absolute pointer-events-none left-3  text-base cursor-auto" />
                <Input
                    type={"text"}
                    id={"search"}
                    name={"search"}
                    placeholder="Search"
                    value={data.search}
                    className={"px-9 lg:h-10 rounded-10 "}
                    setData={setData}
                    borders={true}
                />
                <div className="absolute right-0 h-full flex items-center  ">
                    <div className="w-[0.063rem] h-[calc(100%-1.3rem)] "></div>
                    <Select setData={setData} />
                </div>
            </div>
            <button type="submit" className="hidden"></button>
        </form>
    );
};

export default SearchBar;
