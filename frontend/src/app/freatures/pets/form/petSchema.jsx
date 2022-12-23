import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
export const petSchema = {
  name: "pet",
  fields: {
    image: {
      nameAttribute: "input",
      attributes: {
        type: "file",
        name: "image",
        accept: "image/*",
        multiple: false,
      },
    },
    name: {
      nameAttribute: "input",
      attributes: { type: "text", name: "name" },
      label: { content: "pet name" },
    },
    breed: {
      nameAttribute: "input",
      attributes: { type: "text", name: "breed" },
      label: { content: "breed" },
    },
    color: {
      nameAttribute: "input",
      attributes: { type: "text", name: "color" },
      label: { content: "color" },
    },
    age: {
      nameAttribute: "input",
      attributes: {
        type: "number",
        name: "age",
        min: "1",
        max: "15",
      },
      label: { content: "age" },
    },
    species: {
      nameAttribute: "select",
      attributes: {
        name: "species",
      },
      options: [
        { value: "dog", label: "dog" },
        { value: "cat", label: "cat" },
      ],
      label: { content: "species" },
    },
    collar: {
      nameAttribute: "select",
      attributes: {
        name: "collar",
        required: false,
      },
      options: [
        { value: true, label: "Yes" },
        { value: false, label: "No" },
      ],
      label: { content: "collar" },
    },
    gender: {
      nameAttribute: "select",
      attributes: {
        name: "gender",
        required: false,
      },
      options: [
        { value: "male", label: "male" },
        { value: "female", label: "female" },
      ],
      label: { content: "gender" },
    },
    size: {
      nameAttribute: "select",
      attributes: {
        name: "size",
        required: false,
      },
      options: [
        { value: "small", label: "small" },
        { value: "medium", label: "medium" },
        { value: "large", label: "large" },
        { value: "giant", label: "giant" },
      ],
      label: { content: "size" },
    },
    description: {
      nameAttribute: "textaerea",
      attributes: {
        name: "description",
        rows: 5,
      },
      label: { content: "description", caption: "Max. 500 characters" },
    },
  },
  classes: {
    label: "block text-sm font-medium text-gray-900 capitalize",
    input:
      "peer mt-1 block w-full rounded-md border-gray-300 py-3 px-4 h-12 text-base focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm",
    textArea:
      "peer block mt-1 w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",
    file: "hidden",
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("pet name is equired").min(4),
    species: Yup.string()
      .required("pet species is Required")
      .oneOf(["dog", "cat"]),
    description: Yup.string()
      .required("pet description is equired")
      .min(5)
      .max(255),
  }),
  breed: Yup.string(),
  color: Yup.string(),
  age: Yup.number().min(1).max(15),
  collar: Yup.string().oneOf(["Yes", "No"]),
  gender: Yup.string().oneOf(["male", "female"]),
  size: Yup.string().oneOf(["small", "medium", "large", "giant"]),
  get initialValues() {
    const defaultValues = {};
    for (let field in this.fields) {
      defaultValues[field] =
        this.fields[field].attributes.type === "file" ? null : "";
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
export const schemaProxy = new Proxy(petSchema, handler);
