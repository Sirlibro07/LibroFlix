const formSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    method_function,
    route,
    route_name: string
) => {
    e.preventDefault();

    method_function(route(route_name));
};

export default formSubmit;