import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export const reportSchema = {
  name: 'report',
  fields: {
    report_type: {
      attributeName: 'select',
      attributes: { name: 'report_type' },
      options: [
        { value: 'lost', label: 'lost' },
        { value: 'found', label: 'found' },
      ],
      label: { content: 'listing type' },
    },
    lost_found_date: {
      attributeName: 'input',
      attributes: { type: 'date', name: 'lost_found_date' },
      label: { content: 'Date last seen' },
    },
    address: {
      attributeName: 'input',
      attributes: { type: 'text', name: 'address' },
      label: { content: 'Last seed address' },
    },
    crossroads: {
      attributeName: 'input',
      attributes: { type: 'text', name: 'crossroads' },
      label: {
        content: 'Nearest cross streets, or location',
      },
    },
    comment: {
      attributeName: 'textaerea',
      attributes: { name: 'comment', placeholder: 'comment', rows: 5 },
      label: { content: 'comment', caption: 'Max. 500 characters' },
    },
  },
  classes: {
    label: 'block text-sm font-medium text-gray-900 capitalize',
    input:
      'peer mt-1 block w-full rounded-md border-gray-300 py-3 px-4 h-12 text-base text-gray-900 focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm placeholder:italic placeholder:text-xs placeholder:text-gray-400 disabled:opacity-75 disabled:bg-slate-100',
    textArea:
      'peer mt-1 block w-full rounded-md border-gray-300 py-3 px-4 text-base text-gray-900 shadow-sm focus:border-orange-500 focus:ring-orange-500 placeholder:italic placeholder:text-xs placeholder:text-gray-400 disabled:opacity-75 disabled:bg-slate-100',
    file: 'hidden',
    inputError: 'text-sm text-red-600',
    formError: 'text-sm text-red-600',
  },
  validationSchema: Yup.object().shape({
    report_type: Yup.string()
      .required('Field Required')
      .oneOf(['lost', 'found']),
    lost_found_date: Yup.date()
      // .transform((value, originalValue) => {
      //   debugger;
      //   const data = new Date(originalValue).toISOString().split('T')[0];
      //   return data;
      // })
      .required('Required')
      .typeError('Please select a valid date')
      .default(undefined)
      .max(Date(), (date) => {
        return `date need to be before or equal ${new Date().toDateString()}`;
      }),
    address: Yup.string().required('Required'),
    crossroads: Yup.string().required('Required'),
    comment: Yup.string().required('Required'),
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
export const reportSchemaProxy = new Proxy(reportSchema, handler);
export const reportInitialValues = reportSchema.initialValues;
