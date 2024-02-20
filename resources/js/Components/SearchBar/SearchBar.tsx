import React from "react";
import { useForm } from "@inertiajs/react";
import SearchBarContent from "./SearchBarContent";

const SearchBar = ({ className = "" }) => {
    const { data, setData, get } = useForm({
        search: "",
    });

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                get(route("movies.index", data.search));
            }}
            className={`w-full ${className}`}
        >
            <SearchBarContent value={data.search} setData={setData} />
        </form>
    );
};

export default SearchBar;
