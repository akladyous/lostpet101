/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'header-image': "url('../images/banner/bradcam.png')"
            }
        },
    },
    plugins: [],
}
