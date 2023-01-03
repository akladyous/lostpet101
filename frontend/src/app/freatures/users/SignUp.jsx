import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useCallback, useRef, useState, useEffect } from 'react';
import { useFormik } from 'formik';

// import { Label } from '../../../components/form/Label.jsx';
// import { ErrorField } from '../../../components/form/ErrorField.jsx';
import { TextField } from '../../../components/form/TextField.jsx';
import { signUpSchema as schema } from './form/signUpSchema.js';
import { FormMessages } from './form/FormMessages.jsx';
import { usersSignUp } from '../../../state/thunks/users/usersSignUp.jsx';
import AuthenticateWithProvider from './form/AuthenticateWithProvider.jsx';
import RememberMe from './form/RememberMe.jsx';
import avatarPlaceholder from '../../../assets/images/icons/avatarPlaceholder.png';
import { Image } from '../../../components/ui/Image.jsx';
import Button from '../../../components/ui/Button.jsx';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useCallback, useRef, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { signUpSchema as schema } from './form/signUpSchema.jsx';
import { TextField } from '../../../components/form/TextField.jsx';
import { FileField } from '../../../components/form/FileField.jsx';
import { ErrorField } from '../../../components/form/ErrorField.jsx';

import { usersSignUp } from '../../../state/thunks/users/usersSignUp.jsx';
import AuthenticateWithProvider from './form/AuthenticateWithProvider.jsx';
import RememberMe from './form/RememberMe.jsx';
import avatarPlaceholder from '../../../assets/images/icons/avatarPlaceholder.png';
// import AvatarPlaceHolder from '../../../assets/images/icons/AvatarPlaceHolder.jsx';

// const [formFields, formInitialState, formClasses, formConstrains] = schema;
import { Image } from '../../../components/ui/Image.jsx';
import Button from '../../../components/ui/Button.jsx';
import { useMemo } from 'react';

export default function SignUp() {
  const dispatch = useDispatch();
  const isMounted = useRef(false);
  const inputFileRef = useRef();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [avatar, setAvatar] = useState();

  const handleSubmit = useCallback(
    async (values, actions) => {
      console.log('handle submit -> values : ', values);
      const signupValues = new FormData(document.forms['signupForm']);
      // const controller = new AbortController();
      const response = await dispatch(usersSignUp({ user: signupValues }));
      // controller.abort();
  const onSubmit = useCallback(
    async (values, event) => {
      const formData = new FormData();
      for (let key in values) {
        formData.append(key, values[key]);
      }
      const response = await dispatch(usersSignUp({ formData }));

      if (usersSignUp.fulfilled.match(response)) {
        formMessageRef.current.textContent = 'account successfully created';
        actions.resetForm(schema.initialValues);
        setTimeout(() => {
          navigate('/', { replace: true });
        }, 5000);
      } else {
        switch (true) {
          case response.payload.hasOwnProperty('message'):
            formMessageRef.current.textContent = response.payload.message;
            break;
          case response.payload.hasOwnProperty('validation'):
            actions.setErrors(response.payload.validation);
            formMessageRef.current.textContent = '';
            break;
          case response.payload.hasOwnProperty('error'):
            formMessageRef.current.textContent = response.payload.message;
            break;
          default:
            formMessageRef.current.textContent = 'Server Error';
            break;
        }
      }
      actions.setSubmitting(false);
      return new Promise((resolve, reject) => {
        if (usersSignUp.fulfilled.match(response)) {
          setError('account successfully created');
          reset();
          setTimeout(() => {
            navigate('/', { replace: true });
          }, 5000);
          return resolve(true);
        } else {
          switch (true) {
            case response.payload.hasOwnProperty('message'):
              setError(response.payload.message);
              break;
            case response.payload.hasOwnProperty('validation'):
              setError(response.payload.validation);
              setError('');
              break;
            case response.payload.hasOwnProperty('error'):
              setError(response.payload.message);
              break;
            case response.payload.default:
              setError('network error');
              break;
          }
          return reject(false);
        }
      });
    },
    [dispatch, navigate, handleSubmit]
  );

  const formik = useFormik({
    initialValues: schema.initialValues,
    onSubmit: handleSubmit,
    onReset: (values, actions) => {},
    validationSchema: schema.validationSchema,
    validateOnChange: false,
  });

  const setUserAvatar = useCallback(
    (image) => {
      const objectUrl = URL.createObjectURL(image);
      setAvatar(objectUrl);
    },
    [setAvatar]
  );

  const onSubmit = useCallback(
    async (values, event) => {
      const formData = new FormData();
      for (let key in values) {
        formData.append(key, values[key]);
      }
      const response = await dispatch(usersSignUp({ formData }));

      return new Promise((resolve, reject) => {
        if (usersSignUp.fulfilled.match(response)) {
          setError('account successfully created');
          reset();
          setTimeout(() => {
            navigate('/', { replace: true });
          }, 5000);
          return resolve(true);
        } else {
          switch (true) {
            case response.payload.hasOwnProperty('message'):
              setError(response.payload.message);
              break;
            case response.payload.hasOwnProperty('validation'):
              setError(response.payload.validation);
              setError('');
              break;
            case response.payload.hasOwnProperty('error'):
              setError(response.payload.message);
              break;
            case response.payload.default:
              setError('network error');
              break;
          }
          return reject(false);
        }
      });
    },
    [dispatch, navigate, handleSubmit]
  );

  const onError = (errors, e) => {
    console.log('onErrors  :', errors, 'onErrors event: ', e);
    console.log('getValues :', getValues());
  };

  useEffect(() => {
    isMounted.current = true;

    return function () {
      isMounted.current = false;
    };
  }, [image]);

  }, []);
  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <button className="mx-auto block" onClick={loadImage}>
            <Image
              sourceImage={image}
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <button
            type="button"
            id="pet-image"
            className="block mx-auto w-14 h-14 border border-solid border-orange-400 rounded-full hover:bg-slate-50 hover:p-1 hover:border-spacing-4 shadow-md transition-all duration-300 ease-linear  focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            // className="mx-auto block"
            onClick={() => inputFileRef.current.click()}
          >
            {/* <Image
              sourceImage={watchUserAvatar}
              fallBackImage={avatarPlaceholder}
              alt="user-avatar"
              className="mx-auto h-20 w-20 object-center rounded-full"
            />
              alt="user-avatar"
              className="mx-auto h-20 w-20 object-center rounded-full"
            /> */}
            <>
              <img
                src={avatar ? avatar : avatarPlaceholder}
                alt="dog-iamge"
                className="h-full w-full object-cover rounded-full"
              />
            </>
          </button>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign up a new account
          </h2>
        </div>

        <div className="mx-3 mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-slate py-8 px-4 shadow-xl brightness-100 sm:rounded-lg sm:px-10">
            <form
              name={schema.name}
              onSubmit={formik.handleSubmit}
              onReset={formik.handleReset}
              className="space-y-6"
            >
              <input
                ref={avatarRef}
                id={schema.fields.avatar.attributes.name}
                {...schema.fields.avatar.attributes}
                className="hidden"
                onChange={(e) => {
                  loadImage(e);
                  formik.handleChange(e);
                  formik.setFieldValue('avatar', e.currentTarget.files[0]);
                }}
                onBlur={formik.handleBlur}
              />
              {Object.keys(schema.fields)
                .filter((field) => field !== 'avatar')
                .map((field, idx) => {
                  return (
                    <div key={idx}>
                      <TextField
                        control={control}
                        input={schema.fields[field].attributes}
                        label={schema.fields[field].label}
                        classes={schema.classes}
                      />
                    </div>
                  );
                })}

              {Object.keys(schema.fields)
                .filter((field) => field !== 'avatar')
                .map((field, idx) => {
                  return (
                    <div key={idx}>
                      <TextField
                        label={schema.fields[field].label}
                        input={schema.fields[field].attributes}
                        classes={schema.classes}
                        handleChange={formik.handleChange}
                        handleBlur={formik.handleBlur}
                        value={
                          formik.values[schema.fields[field].attributes.name]
                        }
                        error={
                          formik.errors[schema.fields[field].attributes.name]
                        }
                        touched={
                          formik.touched[schema.fields[field].attributes.name]
                        }
                      />
                    </div>
                  );
                })}

              {/* <div>
                <TextField
                  label={schema.fields.email.label}
                  input={schema.fields.email.attributes}
                  classes={schema.classes}
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                  value={formik.values[schema.fields.email.attributes.name]}
                  error={formik.errors[schema.fields.email.attributes.name]}
                  touched={formik.touched[schema.fields.email.attributes.name]}
                />
              </div>
              <div>
                <TextField
                  label={schema.fields.password.label}
                  input={schema.fields.password.attributes}
                  classes={schema.classes}
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                  value={formik.values[schema.fields.password.attributes.name]}
                  error={formik.errors[schema.fields.password.attributes.name]}
                  touched={formik.touched[schema.fields.password.attributes.name]}
                />
              </div>
              <div>
                <TextField
                  label={schema.fields.passwordConfirmation.label}
                  input={schema.fields.passwordConfirmation.attributes}
                  classes={schema.classes}
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                  value={formik.values[schema.fields.passwordConfirmation.attributes.name]}
                  error={formik.errors[schema.fields.passwordConfirmation.attributes.name]}
                  touched={formik.touched[schema.fields.passwordConfirmation.attributes.name]}
                />
              </div>
              */}
              <FormMessages ref={formMessageRef} />
              <div className="flex items-center justify-between">
                <RememberMe />
                <div className="text-sm">
                  <Link
                    to="/users/signin"
                    state={'User SignUp'}
                    className="font-medium text-orange-600 hover:text-orange-500"
                  >
                    have account already?
                  </Link>
                </div>
              </div>

              <div>
                <Button
                  type="submit"
                  isSubmitting={formik.isSubmitting}
                  status={formik.isSubmitting}
                  value="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-orange-600 py-2 px-4 text-sm
                                    font-medium text-white shadow-md transition-all duration-300 ease-linear hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  type="submit"
                  isLoading={isSubmitting}
                  isValid={isValid}
                  isSubmitSuccessful={isSubmitSuccessful}
                  value="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-orange-600 py-2 px-4 text-sm font-medium text-white shadow-md transition-all duration-300 ease-linear hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                ></Button>
              </div>
            </form>
            <AuthenticateWithProvider />
          </div>
        </div>
      </div>
    </>
  );
}
