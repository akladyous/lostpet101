import * as Yup from 'yup';
export const petSchema = {
  name: 'pet',
  fields: {
    image: {
      attributes: { type: 'file', required: true, name: 'image' },
      typeAttribute: 'input',
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
      attributes: { type: 'text', required: true, name: 'name' },
      attributeName: 'input',
      attributes: { type: 'text', name: 'name' },
      label: { content: 'pet name' },
      typeAttribute: 'input',
    },
    breed: {
      attributes: { type: 'text', required: true, name: 'breed' },
      attributeName: 'input',
      attributes: { type: 'text', name: 'breed', placeholder: 'if known' },
      label: { content: 'breed' },
      typeAttribute: 'input',
    },
    color: {
      attributes: { type: 'text', required: true, name: 'color' },
      attributeName: 'input',
      attributes: { type: 'text', name: 'color' },
      label: { content: 'color' },
      typeAttribute: 'input',
    },
    age: {
      attributeName: 'input',
      attributes: {
        type: 'number',
        required: true,
        name: 'age',
        min: '1',
        max: '15',
      },
      label: { content: 'age' },
      typeAttribute: 'input',
    },
    species: {
      attributeName: 'select',
      attributes: {
        type: 'select',
        name: 'species',
        required: true,
        options: [
          { value: 'dog', label: 'dog' },
          { value: 'cat', label: 'cat' },
        ],
      },
      label: { content: 'species' },
      typeAttribute: 'input',
    },
    collar: {
      attributeName: 'select',
      attributes: {
        type: 'select',
        name: 'collar',
        required: false,
        options: [
          { value: true, label: 'Yes' },
          { value: false, label: 'No' },
        ],
      },
      label: { content: 'collar' },
      typeAttribute: 'input',
    },
    gender: {
      attributeName: 'select',
      attributes: {
        type: 'select',
        name: 'gender',
        required: false,
        options: [
          { value: 'male', label: 'male' },
          { value: 'female', label: 'female' },
        ],
      },
      label: { content: 'gender' },
      typeAttribute: 'input',
    },
    size: {
      attributeName: 'select',
      attributes: {
        type: 'select',
        name: 'size',
        required: false,
        options: [
          { value: 'small', label: 'small' },
          { value: 'medium', label: 'medium' },
          { value: 'large', label: 'large' },
          { value: 'giant', label: 'giant' },
        ],
      },
      label: { content: 'size' },
      typeAttribute: 'input',
    },
    description: {
      attributeName: 'textaerea',
      attributes: {
        type: 'textaerea',
        required: true,
        name: 'description',
        placeholder:
          'BE SPECIFIC - IMPORTANT / DISTINCT MARKINGS / FEATURES Coloring of fur, describe collars, etc.',
        rows: 5,
      },
      label: { content: 'description', caption: 'Max. 500 characters' },
      typeAttribute: 'textarea',
    },
  },
  classes: {
    label: 'block text-sm font-medium text-gray-900 capitalize',
    input:
      'peer mt-1 block w-full rounded-md border-gray-300 py-3 px-4 h-12 text-base focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm',
    textarea:
      'peer block mt-1 w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500',
      'peer mt-1 block w-full rounded-md border-gray-300 py-3 px-4 h-12 text-base text-gray-900 focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm placeholder:italic placeholder:text-xs placeholder:text-gray-400 disabled:opacity-75 disabled:bg-slate-100',
    textArea:
      'peer mt-1 block w-full rounded-md border-gray-300 py-3 px-4 text-base text-gray-900 shadow-sm focus:border-orange-500 focus:ring-orange-500 placeholder:italic placeholder:text-xs placeholder:text-gray-400 disabled:opacity-75 disabled:bg-slate-100',
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
  validationSchema: Yup.object({
    image: Yup.mixed().required('image is required'),
    name: Yup.string().required('Required'),
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
    age: Yup.number().min(1).max(15),
    species: Yup.string().required('Required').oneOf(['dog', 'cat']),
    collar: Yup.string().oneOf(['Yes', 'No']),
    gender: Yup.string().oneOf(['male', 'female']),
    size: Yup.string().oneOf(['small', 'medium', 'large', 'giant']),
    description: Yup.string().required('Required').min(5).max(255),
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
export const petSchemaProxy = new Proxy(petSchema, handler);
export const petIntialValues = petSchema.initialValues;
