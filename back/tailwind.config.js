import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
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

    plugins: [forms],
};
