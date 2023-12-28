const submit = (
    e: React.FormEvent<HTMLFormElement>,
    post: (url: string) => unknown,
    route: (url: string) => string,
    endpoint: string
) => {
    e.preventDefault();

    post(route(endpoint));
};

export default submit;
