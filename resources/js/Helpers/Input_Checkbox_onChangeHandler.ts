import { ChangeEvent } from "react";

const Input_Checkbox_onChangeHandler = (
    e: ChangeEvent<HTMLInputElement>,
    property: string,
    setData: (PrevState: object) => void
) => {
    setData((PrevState: object) => {
        const state =
            property === "remember"
                ? { ...PrevState, [property]: e.target.checked }
                : { ...PrevState, [property]: e.target.value };

        console.log(state);

        return state;
    });
};

export default Input_Checkbox_onChangeHandler;
