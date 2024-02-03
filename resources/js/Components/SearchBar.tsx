import React, { useContext, useState } from "react";
import Input from "./Input";
import SearchIcon from "./SearchIcon";
import { router } from "@inertiajs/react";
import Menu_Searchbar_Context from "@/Contexts/Menu_Searchbar_Context";
import Button from "./Button";

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
                <SearchIcon className="absolute pointer-events-none left-3 text-base cursor-auto" />
                <Input
                    type={"text"}
                    id={"search"}
                    name={"search"}
                    placeholder="Search movie"
                    value={data.search}
                    className={"px-9 lg:h-10"}
                    setData={setData}
                />

                <Button className="absolute right-0 h-full px-4 rounded-10  transitions bg-white text-black hover:bg-brand hover:text-white">
                    Search
                </Button>
            </div>
        </form>
    );
};

export default SearchBar;
