import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Icon from "../Global/Icon";
import InputWithOptionalButton from "../Input/InputWithOptionalButton";

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
        <InputWithOptionalButton
            name={"search"}
            value={value}
            type={"text"}
            placeholder="Search movie"
            className={"pl-11"}
            icon_className="text-lg"
            setData={setData}
            button={true}
            button_title="Search"
            button_type="submit"
            icon_type={"solid"}
            icon_name={"search"}
        />
    );
};

export default SearchBarContent;
