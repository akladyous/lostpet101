import * as Yup from "yup";
export const petFormSchema = {
    fields: {
        name: {
            attributes: { type: "text", required: true, name: "name" },
            label: { content: "pet name" },
        },
        breed: {
            attributes: { type: "text", required: true, name: "breed" },
            label: { content: "breed" },
        },
        color: {
            attributes: { type: "text", required: true, name: "color" },
            label: { content: "color" },
        },
        age: {
            attributes: {
                type: "number",
                required: true,
                name: "age",
                min: "1",
                max: "15",
            },
            label: { content: "age" },
        },
        species: {
            attributes: {
                type: "select",
                name: "species",
                required: true,
                options: [
                    { value: "dog", label: "dog" },
                    { value: "cat", label: "cat" },
                ],
            },
            label: { content: "species" },
        },
        collar: {
            attributes: {
                type: "select",
                name: "collar",
                required: false,
                options: [
                    { value: true, label: "yes" },
                    { value: false, label: "no" },
                ],
            },
            label: { content: "collar" },
        },
        gender: {
            attributes: {
                type: "select",
                name: "gender",
                required: false,
                options: [
                    { value: "male", label: "male" },
                    { value: "female", label: "female" },
                ],
            },
            label: { content: "gender" },
        },
        size: {
            attributes: {
                type: "select",
                name: "size",
                required: false,
                options: [
                    { value: "small", label: "small" },
                    { value: "medium", label: "medium" },
                    { value: "large", label: "large" },
                    { value: "giant", label: "giant" },
                ],
            },
            label: { content: "size" },
        },
        description: {
            attributes: {
                type: "textaerea",
                required: true,
                name: "description",
            },
            label: { content: "description", caption: "Max. 500 characters" },
        },
    },
    classes: {
        label: "block text-sm font-medium text-gray-900 capitalize",
        input: "peer mt-1 block w-full rounded-md border-gray-300 py-3 px-4 h-12 text-base focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm",
        textarea:
            "peer block mt-1 w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",
    },
    validations: Yup.object({
        report_type: Yup.string().required("Required").oneOf(["lost", "found"]),
        lost_found_date: Yup.date().required("Required"),
        address: Yup.string().required("Required"),
        crossroads: Yup.string().required("Required"),
        comment: Yup.string().required("Required"),
    }),
    get initialValues() {
        return Object.keys(this.fields).reduce((acc, val) => {
            acc[val] = "";
            return acc;
        }, {});
    },
};

const handler = {
    get(target, prop, receiver) {
        const objKeys = Object.keys(target.fields);
        switch (true) {
            case prop === "initialValues":
                return objKeys.reduce((acc, val) => {
                    acc[val] = "";
                    return acc;
                }, {});
            case prop === "columnsName":
                return Object.keys(target.fields);
            default:
                return Reflect.get(...arguments);
        }
    },
};
export const schemaProxy = new Proxy(reportFormSchema, handler);
