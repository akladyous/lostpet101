import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useCallback, useRef, useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { InputField } from './form/InputField.jsx';
import { signUpSchema } from './form/signUpSchema.js';
import { FormMessages } from './form/FormMessages.jsx';
import { usersSignUp } from '../../../state/thunks/users/usersSignUp.js';
import AuthenticateWithProvider from './form/AuthenticateWithProvider.jsx';
import RememberMe from './form/RememberMe.jsx';
import FieldErrors from './form/FieldErrors.jsx';
import avatarPlaceholder from '../../../assets/images/icons/avatarPlaceholder.png';
import Image from '../../../components/ui/Image.jsx';

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
            // const controller = new AbortController();
            const response = await dispatch(usersSignUp({ user: values }));
            // controller.abort();

            if (usersSignUp.fulfilled.match(response)) {
                formMessageRef.current.textContent =
                    'account successfully created';
                actions.resetForm(formInitialState);
                setTimeout(() => {
                    navigate('/', { replace: true });
                }, 5000);
            } else {
                switch (true) {
                    case response.payload.hasOwnProperty('message'):
                        formMessageRef.current.textContent =
                            response.payload.message;
                        break;
                    case response.payload.hasOwnProperty('validation'):
                        actions.setErrors(response.payload.validation);
                        formMessageRef.current.textContent = '';
                        break;
                    case response.payload.hasOwnProperty('error'):
                        formMessageRef.current.textContent =
                            response.payload.message;
                        break;
                    default:
                        formMessageRef.current.textContent = '';
                        break;
                }
            }
            actions.setSubmitting(false);
        },
        [dispatch, navigate]
    );

    const formik = useFormik({
        initialValues: Object.assign(formInitialState, { avatar: null }),
        handleSubmit: handleSubmit,
        validationSchema: formConstrains,
        validateOnChange: false,
    });

    const imgageLoader = async (file) =>
        new Promise((resolve, reject) => {
            let reader = new FileReader();
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });

    const loadImage = (e) => {
        e.preventDefault();
        avatarRef.current.click();
        if (avatarRef.current?.files[0]) {
            //e.target.files[0]
            // const reader = new FileReader();
            // reader.onload = (e) => {
            //     setImage(e.target.result);
            // };
            // reader.readAsDataURL(avatarRef.current.files[0]);
            imgageLoader(avatarRef.current.files[0])
                .then((buffer) => {
                    setImage(buffer);
                    e.target.src = buffer;
                })
                .catch((err) => {
                    console.log('error loading image : ', err);
                    setImage(avatarPlaceholder);
                });
        }
        // debugger;
        // e.target.src = { image };
    };
    useEffect(() => {
        isMounted.current = true;

        console.log('signup update');
        return function () {
            isMounted.current = false;
        };
    }, [image]);
    return (
        <>
            <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <button className="mx-auto block" onClick={loadImage}>
                        {/* <img
                            className="mx-auto h-20 w-auto rounded-full"
                            src={image ?? avatarPlaceholder}
                            alt="avatar"
                        /> */}
                        <Image
                            sourceImage={image}
                            fallBackImage={avatarPlaceholder}
                            alt="user-avatar"
                            className="mx-auto h-20 w-auto rounded-full"
                        />
                    </button>
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Sign up a new account
                    </h2>
                </div>

                <div className="mx-3 mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-slate py-8 px-4 shadow-xl brightness-100 sm:rounded-lg sm:px-10">
                        <form
                            name="signup"
                            className="space-y-6"
                            onSubmit={formik.handleSubmit}
                            onReset={formik.handleReset}
                        >
                            <input
                                ref={avatarRef}
                                id="avatar"
                                type="file"
                                name="avatar"
                                title="upload Pet image"
                                accept="image/*"
                                multiple={false}
                                style={{ display: 'none' }}
                                onChange={(e) => {
                                    loadImage(e);
                                    formik.setFieldValue(
                                        'avatar',
                                        e.currentTarget.files[0]
                                    );
                                }}
                                onBlur={formik.handleBlur}
                            />
                            {formFields.map((field, idx) => {
                                return (
                                    <div key={idx}>
                                        <InputField
                                            fieldName={field.input.name}
                                            fieldType={field.input.type}
                                            fieldClasses={formClasses.input}
                                            label={field.label.name}
                                            labelClasses={formClasses.label}
                                            handleChange={formik.handleChange}
                                            handleBlur={formik.handleBlur}
                                            value={
                                                formik.values[field.input.name]
                                            }
                                        >
                                            {
                                                <FieldErrors
                                                    error={
                                                        formik.errors[
                                                            field.input.name
                                                        ]
                                                    }
                                                    touched={
                                                        formik.touched[
                                                            field.input.name
                                                        ]
                                                    }
                                                />
                                            }
                                        </InputField>
                                    </div>
                                );
                            })}
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
                                <button
                                    type="submit"
                                    disabled={formik.isSubmitting}
                                    className="flex w-full justify-center rounded-md border border-transparent bg-orange-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                                >
                                    {formik.isSubmitting ? (
                                        <svg
                                            role="status"
                                            className="mr-3 inline h-4 w-4 animate-spin text-white"
                                            viewBox="0 0 100 101"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                fill="#E5E7EB"
                                            />
                                            <path
                                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    ) : null}
                                    {formik.isSubmitting
                                        ? 'processing..'
                                        : 'Submit'}
                                </button>
                            </div>
                        </form>
                        <AuthenticateWithProvider />
                    </div>
                </div>
            </div>
        </>
    );
}
