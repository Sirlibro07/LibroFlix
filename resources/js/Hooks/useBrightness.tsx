import NavbarContext from "@/Contexts/NavbarContext";
import { useContext } from "react";

const useBrightness = () => {
    const Context = useContext(NavbarContext);
    const { isMenuVisible } = Context;
    const { isSearchbarVisible } = Context;

    const low_brightness_style =
        isMenuVisible || isSearchbarVisible ? "brightness-[30%]" : "";

    return low_brightness_style;
};

export default useBrightness;
