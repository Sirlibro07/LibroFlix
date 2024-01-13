import imgStoragePath from "./imgStoragePath";

const getImg = (folder_name: string, version: string) => {
    return imgStoragePath(`backgrounds/${folder_name}/${version}`);
};

export default getImg;
