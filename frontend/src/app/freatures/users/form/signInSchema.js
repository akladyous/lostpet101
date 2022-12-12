import * as Yup from 'yup';

const formFields = [
    {
        input: { name: 'email', type: 'email' },
        label: { name: 'Email Address' },
    },
    {
        input: { name: 'password', type: 'password' },
        label: { name: 'password' },
    },
];
const formClasses = {
    label: 'mb-2 block text-sm font-medium text-gray-700 capitalize',
    input: 'peer block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-orange-300 focus:outline-none focus:ring-orange-500 sm:text-sm',
};

const formConstrains = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
        .required('Required')
        .min(5, 'Must be 5 and 32 characters')
        .max(64, 'Must be 5 and 32 characters'),
});

export const signInSchema = () => {
    const formInitialState = formFields.reduce((acc, value) => {
        acc[value.input.name] = '';
        return acc;
    }, {});
    return [formFields, formInitialState, formClasses, formConstrains];
};
