type InputType = {
    type?: string;
    name: string;
    placeholder?: string;
    autoComplete?: string;
    value: string;
    className?: string;
    setData: (PrevState: object) => void;
    state_name?: string;
};

export default InputType;
