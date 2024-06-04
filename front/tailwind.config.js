/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            'roboto': ["Roboto"],
            'poppins': ["Poppins"]
        },
        extend: {},
        colors: {
            'background': '#F8FBFF',
            'bodyText': '#101916',
            'greenblue': '#35C9B6'
        },
    },
    plugins: [],
}
