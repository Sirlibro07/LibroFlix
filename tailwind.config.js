import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.tsx",
    ],

    darkMode: false,

    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", ...defaultTheme.fontFamily.sans],
                display: [
                    "Reggae One",
                    "Inter",
                    ...defaultTheme.fontFamily.sans,
                ],
            },
            fontSize: {
                typescale_19_px: "19px",
                typescale_21_px: "21px",
                typescale_23_px: "23px",
                typescale_28_px: "28px",
                typescale_33_px: "33px",
                typescale_38px: "38px",
                typescale_67px: "67px",
            },
            aspectRatio: {
                card: "11 / 16",
            },
            borderRadius: {
                10: "0.625rem",
            },
            height: {
                elements_height: "44px",
                navbar_height: "90px",
            },
            colors: {
                brand: "#A2663E",
                grey: "#5F5F61",
            },
            spacing: {
                1: "0.063rem",
                navbar_height: "90px",
            },
        },
        screens: {
            xs: "420px",
            ...defaultTheme.screens,
        },
    },

    plugins: [forms],
};
