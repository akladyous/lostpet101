import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useCallback, useRef, useState, useEffect } from "react";
import { useFormik } from "formik";
import { Label } from "../../../components/form/Label.jsx";
import { TextField } from "../../../components/form/TextField.jsx";
import { signUpSchema } from "./form/signUpSchema.jsx";
import { FormMessages } from "./form/FormMessages.jsx";
import { usersSignUp } from "../../../state/thunks/users/usersSignUp.jsx";
import AuthenticateWithProvider from "./form/AuthenticateWithProvider.jsx";
import RememberMe from "./form/RememberMe.jsx";
import { ErrorField } from "../../../components/form/ErrorField.jsx";
import avatarPlaceholder from "../../../assets/images/icons/avatarPlaceholder.png";
import { Image } from "../../../components/ui/Image.jsx";
import Button from "../../../components/ui/Button.jsx";

const [formFields, formInitialState, formClasses, formConstrains] =
  signUpSchema();

export default function SignUp() {
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const isMounted = useRef(false);
  const avatarRef = useRef();
  const formMessageRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    async (values, actions) => {
      const signupValues = new FormData(document.forms["signupForm"]);
      // const controller = new AbortController();
      const response = await dispatch(usersSignUp({ user: signupValues }));
      // controller.abort();

      if (usersSignUp.fulfilled.match(response)) {
        formMessageRef.current.textContent = "account successfully created";
        actions.resetForm(formInitialState);
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 5000);
      } else {
        switch (true) {
          case response.payload.hasOwnProperty("message"):
            formMessageRef.current.textContent = response.payload.message;
            break;
          case response.payload.hasOwnProperty("validation"):
            actions.setErrors(response.payload.validation);
            formMessageRef.current.textContent = "";
            break;
          case response.payload.hasOwnProperty("error"):
            formMessageRef.current.textContent = response.payload.message;
            break;
          default:
            formMessageRef.current.textContent = "";
            break;
        }
      }
      actions.setSubmitting(false);
    },
    [dispatch, navigate]
  );

  const formik = useFormik({
    initialValues: Object.assign(formInitialState, { avatar: null }),
    onSubmit: handleSubmit,
    onReset: (values, actions) => {},
    validationSchema: formConstrains,
    validateOnChange: false,
  });

  const loadImage = (e) => {
    e.preventDefault();
    avatarRef.current.click();
    const file = avatarRef.current?.files[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      if (isMounted.current) {
        setImage(objectUrl);
        e.target.src = objectUrl;
      }
    }
  };

  useEffect(() => {
    isMounted.current = true;

    return function () {
      isMounted.current = false;
    };
  }, [image]);
  return (
    <>
      <div className='flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <button className='mx-auto block' onClick={loadImage}>
            <Image
              sourceImage={image}
              fallBackImage={avatarPlaceholder}
              alt='user-avatar'
              className='mx-auto h-20 w-20 object-center rounded-full'
            />
          </button>
          <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
            Sign up a new account
          </h2>
        </div>

        <div className='mx-3 mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='bg-slate py-8 px-4 shadow-xl brightness-100 sm:rounded-lg sm:px-10'>
            <form
              name='signupForm'
              onSubmit={formik.handleSubmit}
              onReset={formik.handleReset}
              className='space-y-6'
            >
              <input
                ref={avatarRef}
                id='avatar'
                type='file'
                name='avatar'
                title='upload Pet image'
                accept='image/*'
                multiple={false}
                className='hidden'
                onChange={(e) => {
                  loadImage(e);
                  formik.handleChange(e);
                  formik.setFieldValue("avatar", e.currentTarget.files[0]);
                }}
                onBlur={formik.handleBlur}
              />

              {formFields.map((field, idx) => {
                return (
                  <div key={idx}>
                    <Label
                      htmlFor={field.label.name}
                      className={formClasses.label}
                      content={field.label.name}
                    />
                    <TextField
                      name={field.input.name}
                      type={field.input.type}
                      className={formClasses.input}
                      handleChange={formik.handleChange}
                      handleBlur={formik.handleBlur}
                      value={formik.values[field.input.name]}
                    />
                    <ErrorField
                      error={formik.errors[field.input.name]}
                      touched={formik.touched[field.input.name]}
                    />
                  </div>
                );
              })}
              <FormMessages ref={formMessageRef} />
              <div className='flex items-center justify-between'>
                <RememberMe />
                <div className='text-sm'>
                  <Link
                    to='/users/signin'
                    state={"User SignUp"}
                    className='font-medium text-orange-600 hover:text-orange-500'
                  >
                    have account already?
                  </Link>
                </div>
              </div>

              <div>
                <Button
                  type='submit'
                  isSubmitting={formik.isSubmitting}
                  status={formik.isSubmitting}
                  value='submit'
                  className='flex w-full justify-center rounded-md border border-transparent bg-orange-600 py-2 px-4 text-sm
                                    font-medium text-white shadow-md transition-all duration-300 ease-linear hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
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
