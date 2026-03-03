/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0a0a0a",
                surface: "#141414",
                card: "#1a1a1a",
                border: "#2a2a2a",
                primary: "#ffffff",
                secondary: "#888888",
                accent: "#ffffff",
            },
            fontFamily: {
                display: ["Syne", "sans-serif"],
                body: ["DM Sans", "sans-serif"],
                mono: ["JetBrains Mono", "monospace"],
            },
        },
    },
    plugins: [],
}
