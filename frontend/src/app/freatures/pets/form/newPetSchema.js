import * as Yup from 'yup';

const formFields = [
    {
        input: {
            name: 'report_type',
            type: 'select',
            options: ['lost', 'found'],
            defaultValue: '',
        },
        label: { name: 'listing type' },
    },
    {
        input: { name: 'lost_found_date', type: 'date' },
        label: { name: 'Date last seen' },
    },
    {
        input: { name: 'address', type: 'text' },
        label: { name: 'Last seed address' },
    },
    {
        input: { name: 'crossroads', type: 'text' },
        label: { name: 'Nearest cross streets, landmark or location' },
    },
    {
        input: { name: 'comment', type: 'textaerea' },
        label: { name: 'comment' },
    },
];
const formClasses = {
    label: 'block text-sm font-medium text-gray-900 capitalize',
    input: 'peer mt-1 block w-full rounded-md border-gray-300 py-3 px-4 h-12 text-base focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm',
};
const formConstrains = Yup.object({
    report_type: Yup.string().required('Required'),
    lost_found_date: Yup.date().required('Required'),
    address: Yup.string().required('Required'),
    crossroads: Yup.string().required('Required'),
    comment: Yup.string().required('Required'),
});

export const newPetSchema = () => {
    const formInitialState = formFields.reduce((acc, value) => {
        acc[value.input.name] = '';
        return acc;
    }, {});
    return [formFields, formInitialState, formClasses, formConstrains];
};
