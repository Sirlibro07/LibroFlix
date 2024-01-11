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
                input: "15px",
                mobile_h1: "38px",
                desktop_h1: "67px",
                logo: "28px",
                typescale_21_px: "21px",
            },
            borderRadius: {
                10: "0.625rem",
                auth_big_radius: "40px",
            },
            maxWidth: {
                pc_auth_max_width: "850px",
                mobile_menu_max_width: "336px",
            },
            height: {
                auth_input_btn: "50px",
                normal_btn: "40px",
            },
            width: {
                searchbar_width: "430px",
            },
            colors: {
                brand: "#A2663E",
                label: "#5F5F61",
                secondary: "#1E1E1E",
                body: "black",
                contrast: "white",
                success: "#689B5B",
                error_danger: "#A61C1E",
                border_color: "#413F43",
                unused_option_color: "#706A6B",
                light_color: "#BBBBBB",
            },
            margin: {
                pc_auth_x_margin: "1.875rem",
            },
            padding: {
                mobile_side_padding: "16px",
                mobile_auth_y_padding: "32px",
                desktop_auth_x_padding: "100px",
            },
            spacing: {
                1: "0.063rem",
            },
        },
    },

    plugins: [forms],
};
