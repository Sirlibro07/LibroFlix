import imgStoragePath from "./imgStoragePath";

const getBackgroundImg = (folder_name: string, version: string) => {
    return imgStoragePath(`backgrounds/${folder_name}/${version}`);
};

export default getBackgroundImg;
