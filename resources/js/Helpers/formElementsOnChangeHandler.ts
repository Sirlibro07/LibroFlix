import { ChangeEvent } from "react";

const formElementsOnChangeHandler = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
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

export default formElementsOnChangeHandler;
