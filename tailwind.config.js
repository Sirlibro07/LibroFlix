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
                typescale_19_px: "1.1875rem",
                typescale_21_px: "1.3125rem",
                typescale_23_px: "1.4375rem",
                typescale_28_px: "1.75rem",
                typescale_33_px: "2.0625rem",
                typescale_38px: "2.375rem",
                typescale_50px: "3.125rem",
                typescale_67px: "4.1875rem",
            },
            aspectRatio: {
                card: "11 / 16",
            },
            borderRadius: {
                10: "0.625rem",
            },
            height: {
                elements_height: "3.25rem",
                navbar_height: "5.625rem",
            },
            colors: {
                brand: "#F37335",
                dark: "#111111",
                grey: "#5F5F61",
                green: "#689B5B",
                red: "#A61C1E",
            },
            spacing: {
                one_px: "0.063rem",
                navbar_height: "5.625rem",
            },
        },
        screens: {
            xs: "420px",
            ...defaultTheme.screens,
        },
    },

    plugins: [forms],
};
