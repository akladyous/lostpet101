/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'header-image': "url('../images/banner/bradcam.png')",
                'slide-area': "url('../images/banner/banner.png')",
                'team-area': "url('../images/banner/contact_bg.png')",
                'service-icon':
                    "url('../images/service/service_icon_bg_1.png')",
            },
        },
    },
    plugins: [
        plugin(function ({ addVariant }) {
            addVariant('optional', '&:optional');
            addVariant('group-optional', ':merge(.group):optional &');
            addVariant('peer-optional', ':merge(.peer):optional ~ &');
        }),
    ],
};
