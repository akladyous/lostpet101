import * as Yup from 'yup';
export const signUpSchema = {
  name: 'user',
  fields: {
    avatar: {
      attributes: { type: 'file', name: 'avatar', accept: 'image/*', multiple: false },
      typeAttribute: 'input',
      className: 'hidden',
    },
    email: {
      attributes: { type: 'email', required: true, name: 'email' },
      label: { content: 'Email Address' },
      typeAttribute: 'input',
    },
    password: {
      attributes: { type: 'password', required: true, name: 'password' },
      label: { content: 'password' },
    },
    password_confirmation: {
      attributes: { type: 'password', required: true, name: 'password_confirmation' },
      label: { content: 'password confirmation' },
      typeAttribute: 'input',
    },
  },
  classes: {
    label: 'block text-sm font-medium text-gray-900 capitalize',
    input:
      'peer mt-1 block w-full rounded-md border-gray-300 py-3 px-4 h-12 text-base focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm',
    textarea:
      'peer block mt-1 w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500',
  },
  validationSchema: Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(5, 'Must be 5 characters or more').max(32, 'Must be 32 characters or less'),
    password_confirmation: Yup.string()
      .required('Required')
      .min(5, 'Must be 5 and 32 characters')
      .max(64, 'Must be 5 and 32 characters')
      .oneOf([Yup.ref('password')], "Password confirmation doesn't match")
      .required('Required'),
  }),
  get initialValues() {
    const defaultValues = {};
    for (let field in this.fields) {
      defaultValues[field] = this.fields[field].attributes.type === 'file' ? null : '';
    }
    return defaultValues;
  },
};
const handler = {
  get(target, prop, receiver) {
    const objKeys = Object.keys(target.fields);
    switch (true) {
      case prop === 'initialValues':
        return objKeys.reduce((acc, val) => {
          acc[val] = '';
          return acc;
        }, {});
      case prop === 'columnsName':
        return Object.keys(target.fields);
      default:
        return Reflect.get(...arguments);
    }
  },
};
export const schemaProxy = new Proxy(signUpSchema, handler);
