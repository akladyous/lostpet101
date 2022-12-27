import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export const signUpSchema = {
  name: 'use',
  fields: {
    avatar: {
      attributeName: 'input',
      attributes: {
        type: 'file',
        name: 'avatar',
        accept: 'image/*',
        multiple: false,
      },
      label: null,
      classes: 'hidden',
    },
    email: {
      attributeName: 'input',
      attributes: { type: 'email', name: 'email' },
      label: { content: 'Email Address' },
    },
    password: {
      attributeName: 'input',
      attributes: { type: 'password', name: 'password' },
      label: { content: 'Password' },
    },
    password_confirmation: {
      attributeName: 'input',
      attributes: { type: 'password', name: 'password_confirmation' },
      label: { content: 'Password Confirmation' },
    },
  },
  classes: {
    label: 'mb-2 block text-sm font-medium text-gray-700 capitalize',
    input:
      'peer block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-orange-300 focus:outline-none focus:ring-orange-500 sm:text-sm',
    file: 'hidden',
    inputError: 'text-sm text-red-600',
    formError: 'text-sm text-red-600',
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
      .required('Required')
      .min(5, 'Must be 5 and 32 characters')
      .max(64, 'Must be 5 and 32 characters'),
    password_confirmation: Yup.string()
      .required('Required')
      .min(5, 'Must be 5 and 32 characters')
      .max(64, 'Must be 5 and 32 characters')
      .oneOf([Yup.ref('password')], "Password confirmation doesn't match"),
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
export const schemaProxy = new Proxy(signUpSchema, handler);
