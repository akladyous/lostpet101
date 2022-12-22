import * as Yup from "yup";
export const reportSchema = {
  name: "report",
  fields: {
    report_type: {
      attributes: {
        type: "select",
        name: "report_type",
        required: true,
        options: [
          { value: "lost", label: "lost" },
          { value: "found", label: "found" },
        ],
      },
      label: { content: "listing type", caption: "Optional" },
      container: { type: "div" },
    },
    lost_found_date: {
      attributes: {
        type: "date",
        required: true,
        name: "lost_found_date",
      },
      label: { content: "Date last seen" },
      container: { type: "div" },
    },
    address: {
      attributes: { type: "text", required: true, name: "address" },
      label: { content: "Last seed address" },
      container: { type: "div", className: "sm:col-span-2" },
    },
    crossroads: {
      attributes: { type: "text", required: true, name: "crossroads" },
      label: {
        content: "Nearest cross streets, landmark or location",
        className: null,
      },
      container: { type: "div", className: "sm:col-span-2" },
    },
    comment: {
      attributes: { type: "textaerea", required: true, name: "comment" },
      label: { content: "comment", caption: "Max. 500 characters" },
      container: { type: "div", className: "sm:col-span-2" },
    },
  },
  classes: {
    label: "block text-sm font-medium text-gray-900 capitalize",
    input:
      "peer mt-1 block w-full rounded-md border-gray-300 py-3 px-4 h-12 text-base focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm",
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
export const schemaProxy = new Proxy(reportSchema, handler);
