import * as Yup from 'yup';
const newReportSchema = {
    fields: {
        report_type: {
            attributes: {
                type: 'select',
                name: 'report_type',
                required: true,
                options: [
                    { value: 'lost', label: 'lost' },
                    { value: 'found', label: 'found' },
                ],
            },
            node: {},
            label: { content: 'listing type', caption: 'Optional' },
            container: { type: 'div' },
        },
        lost_found_date: {
            attributes: {
                type: 'date',
                required: true,
                name: 'lost_found_date',
            },
            label: { content: 'Date last seen' },
            container: { type: 'div' },
        },
        address: {
            attributes: { type: 'text', required: true, name: 'address' },
            label: { content: 'Last seed address' },
            container: { type: 'div', className: 'sm:col-span-2' },
        },
        crossroads: {
            attributes: { type: 'text', required: true, name: 'crossroads' },
            label: {
                value: 'Nearest cross streets, landmark or location',
                className: null,
            },
            container: { type: 'div', className: 'sm:col-span-2' },
        },
        comment: {
            attributes: { type: 'textaerea', required: true, name: 'comment' },
            label: { content: 'comment', caption: 'Max. 500 characters' },
            container: { type: 'div', className: 'sm:col-span-2' },
        },
    },
    classes: {
        label: 'block text-sm font-medium text-gray-900 capitalize',
        input: 'peer mt-1 block w-full rounded-md border-gray-300 py-3 px-4 h-12 text-base focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm',
    },
    validations: Yup.object({
        report_type: Yup.string().required('Required').oneOf(['lost', 'found']),
        lost_found_date: Yup.date().required('Required'),
        address: Yup.string().required('Required'),
        crossroads: Yup.string().required('Required'),
        comment: Yup.string().required('Required'),
    }),
};

const handler = {
    get(target, prop, receiver) {
        switch (true) {
            case prop === 'initialValues':
                const values = Object.keys(target.fields).reduce((acc, val) => {
                    acc[val] = '';
                    return acc;
                }, {});
                return values;
            case prop === 'columnsName':
                return Object.keys(target.fields);
            default:
                return Reflect.get(...arguments);
        }
    },
};
export const reportFormSchema = new Proxy(newReportSchema, handler);
// console.log(proxy.initialValues);
// console.log(proxy.comment.name);
// console.log(proxy.columnsName);
//['report_type', 'lost_found_date', 'address', 'crossroads', 'comment']
