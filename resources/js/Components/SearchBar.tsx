import React, { useContext, useState } from "react";
import { router } from "@inertiajs/react";
import Menu_Searchbar_Context from "@/Contexts/Menu_Searchbar_Context";
import SearchBarContent from "./SearchBarContent";

const SearchBar = () => {
    const [data, setData] = useState({
        search: "",
    });

    const { isMenuVisible } = useContext(Menu_Searchbar_Context);

    const { isSearchbarVisible } = useContext(Menu_Searchbar_Context);

    const visibility_styles = isSearchbarVisible
        ? "navbar_item_visible"
        : "navbar_item_not_visible";

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                router.get(route("movies.index", data.search));
            }}
            className={`absolute z-10 top-[5.688rem] mt-6 px-4 w-full  right-0  lg:static lg:px-0 lg:h-fit lg:m-0 lg:w-[20rem] xl:w-[27rem] lg:top-auto
           ${visibility_styles}`}
        >
            <SearchBarContent value={data.search} setData={setData} />
        </form>
    );
};

export default SearchBar;
