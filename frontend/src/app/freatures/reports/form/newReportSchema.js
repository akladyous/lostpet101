import * as Yup from 'yup';
export const newReportSchema = {
    fields: [
        {
            type: 'select',
            name: 'report_type',
            required: true,
            options: [
                { value: 'lost', label: 'lost' },
                { value: 'found', label: 'found' },
            ],
            container: { type: 'div', className: null },
            label: { value: 'listing type', className: null },
        },
        {
            type: 'date',
            name: 'lost_found_date',
            required: true,
            container: { type: 'div', className: null },
            label: { value: 'Date last seen', className: null },
        },
        {
            type: 'text',
            name: 'address',
            required: true,
            container: { type: 'div', className: 'sm:col-span-2' },
            label: { value: 'Last seed address', className: null },
        },
        {
            type: 'text',
            name: 'crossroads',
            required: true,
            container: { type: 'div', className: 'sm:col-span-2' },
            label: {
                value: 'Nearest cross streets, landmark or location',
                className: null,
            },
        },
        {
            type: 'textaerea',
            name: 'comment',
            required: true,
            container: { type: 'div', className: 'sm:col-span-2' },
            label: { value: 'comment', className: null },
        },
    ],
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
    // get initialValues() {
    //     const values = Object.keys(this.fields).reduce((acc, val) => {
    //         acc[val] = '';
    //         return acc;
    //     }, {});
    //     return values;
    // },
};

const handler = {
    get(target, prop, receiver) {
        const fields = target.fields.map((col) => col.name);
        switch (true) {
            case prop === 'initialValues':
                const values = fields.reduce((acc, val) => {
                    acc[val] = '';
                    return acc;
                }, {});
                return values;
            case prop === 'columnsName':
                return fields;
            case fields.includes(prop):
                return target.fields.find(({ name }) => name === prop);
            default:
                return Reflect.get(...arguments);
        }
    },
};
const proxy = new Proxy(newReportSchema, handler);
console.log(proxy.initialValues);
console.log(proxy.comment.name);
console.log(proxy.columnsName);
//['report_type', 'lost_found_date', 'address', 'crossroads', 'comment']
