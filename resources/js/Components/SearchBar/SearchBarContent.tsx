import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Icon from "../Global/Icon";
import InputWithButton from "../Input/InputWithButton";

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

            <InputWithButton
                name={"search"}
                value={value}
                type={"text"}
                placeholder="Search movie"
                className={"px-9 pr-4"}
                setData={setData}
                button={true}
                button_title="Search"
                button_type="submit"
            />
        </div>
    );
};

export default SearchBarContent;
