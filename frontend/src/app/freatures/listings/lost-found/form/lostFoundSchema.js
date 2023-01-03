import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
export const lostFoundSchema = {
  name: 'reports',
  fields: {
    name: {
      attributeName: 'input',
      attributes: { type: 'text', name: 'name' },
      label: { content: 'pet name' },
    },
    species: {
      attributeName: 'select',
      attributes: {
        name: 'species',
      },
      options: [
        { value: 'dog', label: 'dog' },
        { value: 'cat', label: 'cat' },
      ],
      label: { content: 'species' },
    },
    breed: {
      attributeName: 'input',
      attributes: { type: 'text', name: 'breed', placeholder: 'if known' },
      label: { content: 'breed' },
    },
  },
  classes: {
    label: 'block text-sm font-medium text-gray-900 capitalize',
    input:
      'peer mt-1 block w-full rounded-md border-gray-300 py-3 px-4 h-12 text-base text-gray-900 focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm placeholder:italic placeholder:text-xs placeholder:text-gray-400 disabled:opacity-75 disabled:bg-slate-100 border-orange-100',
    textArea:
      'peer mt-1 block w-full rounded-md border-gray-300 py-3 px-4 text-base text-gray-900 shadow-sm focus:border-orange-500 focus:ring-orange-500 placeholder:italic placeholder:text-xs placeholder:text-gray-400 disabled:opacity-75 disabled:bg-slate-100',
    file: 'hidden',
    inputError: 'text-sm text-red-600',
    formError: 'text-sm text-red-600',
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required('pet name is equired').min(5),
    species: Yup.string(),
    description: Yup.string(),
    breed: Yup.string(),
  }),
  get initialValues() {
    const defaultValues = {};
    for (let field in this.fields) {
      defaultValues[field] =
        this.fields[field].attributes.type === 'file' ? null : '';
    }
    return defaultValues;
  },
  get validation() {
    return yupResolver(this.validationSchema);
  },
};

const handler = {
  get(target, prop, receiver) {
    const fields = Object.keys(target.fields);
    switch (true) {
      case prop === 'initialValues': {
        var defaultValues = {};
        for (let field in target.fields) {
          defaultValues[field] =
            target.fields[field].attributes.type === 'file' ? null : '';
        }
        return defaultValues;
      }
      case fields.indexOf(prop) >= 0:
        return target.fields[prop];
      default:
        return Reflect.get(...arguments);
    }
  },
};
export const petSchemaProxy = new Proxy(lostFoundSchema, handler);
export const petIntialValues = lostFoundSchema.initialValues;
