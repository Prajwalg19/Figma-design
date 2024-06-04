import type {Config} from "tailwindcss";

const config: Config = {
    darkMode: "selector",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            //backgroundImage: {
            //  "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            //  "gradient-conic":
            //    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            //},
            fontFamily: {
                clashBold: ['clash-display-bold', 'sans-serif'],
                clashRegular: ['clash-display-regular', 'sans-serif'],
                clashMedium: ['clash-display-medium', 'sans-serif'],
                clashSemiBold: ['clash-display-semibold', 'sans-serif']
            },
            rotate: {
                '14': '14deg',
            }
        },
    },
    plugins: [],
};
export default config;
