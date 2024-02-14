import React, { useState } from "react";
import { router } from "@inertiajs/react";
import SearchBarContent from "./SearchBarContent";

const SearchBar = ({ className = "" }) => {
    const [data, setData] = useState({
        search: "",
    });

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                router.get(route("movies.index", data.search));
            }}
            className={`w-full ${className}`}
        >
            <SearchBarContent value={data.search} setData={setData} />
        </form>
    );
};

export default SearchBar;
