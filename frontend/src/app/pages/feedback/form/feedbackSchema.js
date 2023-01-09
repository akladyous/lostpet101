import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export const feedbackSChema = {
  name: 'feedback',
  fields: {
    first_name: {
      attributeName: 'input',
      attributes: { type: 'text', name: 'first_name' },
      label: { content: 'first name' },
    },
    last_name: {
      attributeName: 'input',
      attributes: { type: 'text', name: 'last_name' },
      label: { content: 'last name' },
    },
    email: {
      attributeName: 'input',
      attributes: { type: 'email', name: 'email' },
      label: { content: 'email address' },
    },
    phone: {
      attributeName: 'input',
      attributes: { type: 'text', name: 'phone' },
      label: { content: 'phone', caption: 'optional' },
    },
    subject: {
      attributeName: 'input',
      attributes: { type: 'text', name: 'subject' },
      label: { content: 'subject' },
    },

    message: {
      attributeName: 'textaerea',
      attributes: {
        name: 'message',
        placeholder: '',
        rows: 5,
      },
      label: { content: 'message', caption: 'Max. 500 characters' },
    },
  },
  classes: {
    label: 'block text-sm font-medium text-gray-900 capitalize',
    input:
      'peer mt-1 block w-full rounded-md border-gray-300 py-3 px-4 h-12 text-base text-gray-900 border-orange-200 focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm placeholder:italic placeholder:text-xs placeholder:text-gray-400 disabled:opacity-75 disabled:bg-slate-100',
    textArea:
      'peer mt-1 block w-full rounded-md border-gray-300 py-3 px-4 text-base text-gray-900 border-orange-200 shadow-sm focus:border-orange-500 focus:ring-orange-500 placeholder:italic placeholder:text-xs placeholder:text-gray-400 disabled:opacity-75 disabled:bg-slate-100',
    file: 'hidden',
    inputError: 'text-sm text-red-600',
    formError: 'text-sm text-red-600',
  },
  validationSchema: Yup.object().shape({
    first_name: Yup.string().required('First Name is Required'),
    last_name: Yup.string().required('Last Name is Required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is Required'),
    phone: Yup.string(),
    subject: Yup.string().required('Subject is Required'),
    message: Yup.string().required('Message is Required'),
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
export const reportSchemaProxy = new Proxy(feedbackSChema, handler);
export const reportInitialValues = feedbackSChema.initialValues;
