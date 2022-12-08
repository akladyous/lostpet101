import * as Yup from 'yup';

export const initializeState = (obj) => {
    return obj.reduce((acc, value) => {
        acc[value.input.name] = '';
        return acc;
    }, {});
};

export const formClasses = {
    label: 'mb-2 block text-sm font-medium text-gray-700 capitalize',
    textField:
        'block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-orange-300 focus:outline-none focus:ring-orange-500 sm:text-sm',
};

export const signUpSchema = [
    {
        input: { name: 'email', type: 'email' },
        label: { name: 'Email Address' },
    },
    {
        input: { name: 'password', type: 'password' },
        label: { name: 'password' },
    },
    {
        input: { name: 'password_confirmation', type: 'password' },
        label: { name: 'password confirmation' },
    },
];

export const constrains = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
        .min(5, 'Must be 5 and 32 characters')
        .max(64, 'Must be 5 and 32 characters'),
    password_confirmation: Yup.string()
        .min(5, 'Must be 5 and 32 characters')
        .max(64, 'Must be 5 and 32 characters'),
});
