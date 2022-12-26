import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
export const petSchema = {
  name: 'pet',
  fields: {
    image: {
      attributeName: 'input',
      attributes: {
        type: 'file',
        name: 'image',
        accept: 'image/*',
        multiple: false,
      },
      label: null,
      classes: 'hidden',
    },
    name: {
      attributeName: 'input',
      attributes: { type: 'text', name: 'name' },
      label: { content: 'pet name' },
    },
    breed: {
      attributeName: 'input',
      attributes: { type: 'text', name: 'breed', placeholder: 'if known' },
      label: { content: 'breed' },
    },
    color: {
      attributeName: 'input',
      attributes: { type: 'text', name: 'color' },
      label: { content: 'color' },
    },
    age: {
      attributeName: 'input',
      attributes: {
        type: 'number',
        name: 'age',
        placeholder: 'approx. age in unknown',
        min: '1',
        max: '15',
      },
      label: { content: 'age' },
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
    collar: {
      attributeName: 'select',
      attributes: {
        name: 'collar',
      },
      options: [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
      ],
      label: { content: 'collar' },
    },
    gender: {
      attributeName: 'select',
      attributes: {
        name: 'gender',
      },
      options: [
        { value: 'male', label: 'male' },
        { value: 'female', label: 'female' },
      ],
      label: { content: 'gender' },
    },
    size: {
      attributeName: 'select',
      attributes: {
        name: 'size',
      },
      options: [
        { value: 'small', label: 'small' },
        { value: 'medium', label: 'medium' },
        { value: 'large', label: 'large' },
        { value: 'giant', label: 'giant' },
      ],
      label: { content: 'size' },
    },
    description: {
      attributeName: 'textaerea',
      attributes: {
        name: 'description',
        placeholder:
          'BE SPECIFIC - IMPORTANT / DISTINCT MARKINGS / FEATURES Coloring of fur, describe collars, etc.',
        rows: 5,
      },
      label: { content: 'description', caption: 'Max. 500 characters' },
    },
  },
  classes: {
    label: 'block text-sm font-medium text-gray-900 capitalize',
    input:
      'peer mt-1 block w-full rounded-md border-gray-300 py-3 px-4 h-12 text-base text-gray-900 focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm placeholder:italic placeholder:text-xs placeholder:text-gray-400',
    textArea:
      'peer mt-1 block w-full rounded-md border-gray-300 py-3 px-4 text-base text-gray-900 shadow-sm focus:border-orange-500 focus:ring-orange-500 placeholder:italic placeholder:text-xs placeholder:text-gray-400',
    file: 'hidden',
    inputError: 'text-sm text-red-600',
    formError: 'text-sm text-red-600',
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required('pet name is equired').min(5),
    species: Yup.string()
      .required('pet species is Required')
      .oneOf(['dog', 'cat']),
    description: Yup.string()
      .required('pet description is equired')
      .min(5)
      .max(255),
    breed: Yup.string(),
    color: Yup.string(),
    age: Yup.number()
      .required()
      .transform((value) =>
        isNaN(value) || value === null || value === undefined ? 0 : value
      )
      .typeError('Amount must be a number')
      .positive()
      .min(1, 'age must be greater than zero')
      .max(15, 'age must be less than or equal 15'),
    collar: Yup.string().required().oneOf(['Yes', 'No'], ''),
    gender: Yup.string().oneOf(['male', 'female'], 'Select pet gender'),
    size: Yup.string()
      .required()
      .oneOf(['small', 'medium', 'large', 'giant'], 'Select pet size'),
  }),
  get initialValues() {
    const defaultValues = {};
    for (let field in this.fields) {
      defaultValues[field] =
        this.fields[field].attributes.type === 'file' ? null : '';
    }
    return defaultValues;
    /*
    return Object.keys(this.fields).reduce((acc, val) => {
      acc[val] = val.attributes.type === "file" ? null : "";
      return acc;
    }, {});
     */
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
export const schemaProxy = new Proxy(petSchema, handler);
