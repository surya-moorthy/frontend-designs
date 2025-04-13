import { fontFamily } from "tailwindcss/defaultTheme";

export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
    extend: {
        fontFamily: {
            poppins: ["Poppins", ...fontFamily.sans],
        },
    },
};
export const plugins = [];