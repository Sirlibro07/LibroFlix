const thumbnail_path = (title: string) => {
    return title.replace(/ /g, "_");
};

export default thumbnail_path;
