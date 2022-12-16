import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useRef, useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { TextField } from '../../../components/form/TextField.jsx';
import { Label } from '../../../components/form/Label.jsx';
import { signInSchema } from './form/signInSchema.js';
import { FormMessages } from './form/FormMessages.jsx';
import { usersSignIn } from '../../../state/thunks/users/usersSignIn.js';
import AuthenticateWithProvider from './form/AuthenticateWithProvider.jsx';
import RememberMe from './form/RememberMe.jsx';
import { ErrorField } from '../../../components/form/ErrorField.jsx';
import avatarPlaceholder from '../../../assets/images/icons/avatarPlaceholder.png';
import Image from '../../../components/ui/Image.jsx';
import Button from '../../../components/ui/Button.jsx';

const [formFields, formInitialState, formClasses, formConstrains] = signInSchema();

export default function SignIn() {
    const [image, setImage] = useState(null);
    const state = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const isMounted = useRef(false);
    const formMessageRef = useRef(null);
    const navigate = useNavigate();

    const handleSubmit = useCallback(
        async (values, actions) => {
            // const controller = new AbortController();
            const response = await dispatch(usersSignIn({ user: values }));
            // controller.abort();

            if (usersSignIn.fulfilled.match(response)) {
                formMessageRef.current.textContent = 'account successfully created';
                actions.resetForm(formInitialState);
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
        onSubmit: handleSubmit,
        onReset: (values, actions) => {},
        validationSchema: formConstrains,
        validateOnChange: false,
    });

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
                    <Image
                        sourceImage={state?.user?.ima}
                        fallBackImage={avatarPlaceholder}
                        alt="user-avatar"
                        className="mx-auto h-20 w-auto rounded-full"
                    />
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Sign up a new account
                    </h2>
                </div>

                <div className="mx-3 mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-slate py-8 px-4 shadow-xl brightness-100 sm:rounded-lg sm:px-10">
                        <form
                            name="signupForm"
                            className="space-y-6"
                            onSubmit={formik.handleSubmit}
                            onReset={formik.handleReset}
                        >
                            {formFields.map((field, idx) => {
                                return (
                                    <div key={idx}>
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
                                <Button
                                    type="submit"
                                    isSubmitting={formik.isSubmitting}
                                    status={formik.isSubmitting}
                                    value="submit"
                                    className="flex w-full justify-center rounded-md border border-transparent bg-orange-600 py-2 px-4 text-sm
                                    font-medium text-white shadow-md transition-all duration-300 ease-linear hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
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
