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
    <main className="overflow-hidden bg-white my-10" id="feedback">
      <div className="py-7 md:py-10">
        <div className="relative z-10 mx-auto px-10">
          <h1 className="text-xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-red-600 to-orange-400">
            Get in touch
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-500">
            It also helps us identify area where we are doing a good job
          </p>
        </div>
      </div>

      <section className="relative bg-white" aria-labelledby="contact-heading">
        <div className="absolute h-1/2 w-full" aria-hidden="true" />

        <div className="hidden sm:block sm:relative sm:mx-auto sm:max-w-7xl sm:px-6 lg:px-8">
          <DecorativeSVG />
          <DecorativeBackgroundSVG />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <FeedbackSide />

              <div className="py-10 px-6 sm:px-10 lg:col-span-2 md:p-12 rounded-2xl sm:rounded-tr-2xl sm:rounded-tl-none sm:rounded-br-2xl sm:rounded-bl-none border border-orange-200 bg-white">
                <div className="hidden sm:block">
                  <h3 className="text-lg font-medium text-warm-gray-900">
                    Give us your feedback
                  </h3>
                </div>
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
