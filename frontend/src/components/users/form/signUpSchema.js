export const SignUpSchema = [
    {
        attributes: {
            name: "email",
            type: "email",
            className:
                "block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-orange-300 focus:outline-none focus:ring-orange-500 sm:text-sm",
        },
        label: {
            value: "Email Address",
            className: "block text-sm font-medium text-gray-700",
        },
        options: {},
    },
    {
        attributes: {
            name: "password",
            type: "password",
            className:
                "block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-orange-300 focus:outline-none focus:ring-orange-500 sm:text-sm",
        },
        label: {
            value: "password",
            className: "block text-sm font-medium text-gray-700",
        },
        options: {},
    },
    {
        attributes: {
            name: "password_confirmation",
            type: "password",
            className:
                "block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-orange-300 focus:outline-none focus:ring-orange-500 sm:text-sm",
        },
        label: {
            value: "password confirmation",
            className: "block text-sm font-medium text-gray-700",
        },
        options: {},
    },
];
