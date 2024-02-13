import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Icon from "../Global/Icon";

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
            <Icon
                icon_type={"solid"}
                icon_name="search"
                className="absolute z-[1] pointer-events-none left-3 text-base text-grey cursor-auto"
            />
            <Input
                name={"search"}
                value={value}
                type={"text"}
                placeholder="Search movie"
                className={"px-9 lg:h-10"}
                setData={setData}
            />

            <Button className="absolute right-0 h-full px-4 rounded-10  transitions bg-white text-black">
                Search
            </Button>
        </div>
    );
};

export default SearchBarContent;
