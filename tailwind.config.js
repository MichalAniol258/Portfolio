// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}', // jeśli używasz appDir
    ],
    theme: {
        extend: {},
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',

            // dodaj to NA KOŃCU listy, nie przed innymi
            'md-lg': { min: '768px', max: '1399px' },
        },
    },
    plugins: [],
}
