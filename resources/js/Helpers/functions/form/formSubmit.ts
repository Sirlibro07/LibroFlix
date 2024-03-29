const formSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    method_function: (url: string) => void,
    route_name: string
): void => {
    e.preventDefault();

    method_function(route(route_name));
};

export default formSubmit;
