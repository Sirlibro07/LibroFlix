import React from "react";
import SearchIcon from "./SearchIcon";
import Input from "./Input";
import Button from "./Button";

interface SearchBarContentProps {
    value: string;
    setData: React.Dispatch<
        React.SetStateAction<{
            search: string;
        }>
    >;
}

const SearchBarContent = ({ value, setData }: SearchBarContentProps) => {
    return (
        <div className="w-full relative flex items-center">
            <SearchIcon className="absolute pointer-events-none left-3 text-base cursor-auto" />
            <Input
                type={"text"}
                id={"search"}
                name={"search"}
                placeholder="Search movie"
                value={value}
                className={"px-9 lg:h-10"}
                setData={setData}
            />

            <Button className="absolute right-0 h-full px-4 rounded-10  transitions bg-white text-black hover:bg-brand hover:text-white">
                Search
            </Button>
        </div>
    );
};

export default SearchBarContent;
