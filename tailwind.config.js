/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#526664", // Main color (dark green) for buttons and key UI elements
                secondary: "#D3D9F5", // Secondary color (light blue) for tags and subtle UI elements
                accent: "#F5E5B4", // Accent color (yellow) for highlights and ratings
            },
            fontFamily: {
                sans: ["Roboto", "sans-serif"], // Set Roboto as the default sans-serif font
            },
        },
    },
    plugins: [require("daisyui")],
};
