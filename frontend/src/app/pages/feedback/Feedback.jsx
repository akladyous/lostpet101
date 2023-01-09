import { feedbackSChema as schema } from './form/feedbackSchema.js';
import { TextField } from '../../../components/form/TextField.jsx';
import { TextAreaField } from '../../../components/form/TextAreaField.jsx';
import { useForm } from 'react-hook-form';
import FeedbackSide from './FeedbackSide.jsx';
import { DecorativeSVG } from '../../../assets/images/svgs/DecorativeSVG.jsx';
import { DecorativeBackgroundSVG } from '../../../assets/images/svgs/DecorativeBackgroundSVG.jsx';

export default function Feedback() {
  const {
    handleSubmit,
    setFocus,
    control,
    formState: { isValid, isSubmitting, isSubmitSuccessful, errors },
  } = useForm({
    defaultValues: schema.initialValues,
    resolver: schema.validation,
  });

  const onSubmit = async (values) => {
    console.log('values : ', values);
    // await next({
    //   ...values,
    //   lost_found_date: new Date(values.lost_found_date)
    //     .toISOString()
    //     .split('T')[0],
    // });
  };
  const onError = (errors, e) => {
    const firstError = Object.keys(errors).reduce((field, a) => {
      const fieldKey = field;
      return errors[fieldKey] ? fieldKey : a;
    }, null);
    setFocus(firstError);
  };

  return (
    <main className="overflow-hidden bg-white my-10">
      <div className="bg-warm-gray-50">
        <div className="py-10 md:py-20">
          <div className="relative z-10 mx-auto max-w-7xl pl-4 pr-8 sm:px-6 lg:px-8">
            <h1 className="text-xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-red-600 to-orange-400">
              Get in touch
            </h1>
            <p className="mt-6 max-w-3xl text-xl text-gray-500">
              Your feedback provides us with key information about what you
              think as a user of our services and helps us make informed
              decisions about improvements; it also helps us identify area where
              we are doing a good job
            </p>
          </div>
        </div>
      </div>

      <section className="relative bg-white" aria-labelledby="contact-heading">
        <div
          className="absolute h-1/2 w-full bg-warm-gray-50"
          aria-hidden="true"
        />

        <div className="hidden sm:block sm:relative sm:mx-auto sm:max-w-7xl sm:px-6 lg:px-8">
          <DecorativeSVG />
          <DecorativeBackgroundSVG />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative bg-white shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <FeedbackSide />

              <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                <h3 className="text-lg font-medium text-warm-gray-900">
                  Give us your feedback
                </h3>
                <form
                  name={schema.name}
                  onSubmit={handleSubmit(onSubmit, onError)}
                  className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                >
                  <div>
                    <div>
                      <TextField
                        control={control}
                        input={schema.fields.first_name.attributes}
                        label={schema.fields.first_name.label}
                        classes={schema.classes}
                      />
                    </div>
                  </div>
                  <div>
                    <TextField
                      control={control}
                      input={schema.fields.last_name.attributes}
                      label={schema.fields.last_name.label}
                      classes={schema.classes}
                    />
                  </div>
                  <div>
                    <TextField
                      control={control}
                      input={schema.fields.email.attributes}
                      label={schema.fields.email.label}
                      classes={schema.classes}
                    />
                  </div>
                  <div>
                    <TextField
                      control={control}
                      input={schema.fields.phone.attributes}
                      label={schema.fields.phone.label}
                      classes={schema.classes}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <TextField
                      control={control}
                      input={schema.fields.subject.attributes}
                      label={schema.fields.subject.label}
                      classes={schema.classes}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <TextAreaField
                      control={control}
                      input={schema.fields.message.attributes}
                      label={schema.fields.message.label}
                      classes={schema.classes}
                    />
                  </div>
                  <div className="sm:col-span-2 sm:flex sm:justify-end">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
