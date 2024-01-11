const submit = (
    e: React.FormEvent<HTMLFormElement>,
    method_function: (url: string) => unknown,
    route_function: (url: string) => string,
    route_name: string
) => {
    e.preventDefault();

    method_function(route_function(route_name));
};

export default submit;
