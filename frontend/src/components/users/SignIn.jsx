import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useCallback, useRef } from 'react';
import { usersSignIn } from '../../app/api/ThunkAPI/users/usersSignIn.js';
import { signInSchema } from './form/signInSchema.js';
import { Formik } from 'formik';
import { InputField } from './form/InputField.jsx';
import { FormMessages } from './form/FormMessages.jsx';
import AuthenticateWithProvider from './form/AuthenticateWithProvider.jsx';

const [formFields, formInitialState, formClasses, formConstrains] =
    signInSchema();

export default function SignIn() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.users);
    const formMessageRef = useRef(null);
    const navigate = useNavigate();

    const handleSubmit = useCallback(
        async (values, actions) => {
            // const controller = new AbortController();
            const response = await dispatch(usersSignIn({ user: values }));
            // controller.abort();

            if (usersSignIn.fulfilled.match(response)) {
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

    return (
        <>
            <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <img
                        className="mx-auto h-20 w-auto"
                        src={require('../../assets/images/icons/user_placeholder.png')}
                        alt="Your Company"
                    />
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Sign up a new account
                    </h2>
                </div>

                <div className="mx-3 mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-slate py-8 px-4 shadow-xl brightness-100 sm:rounded-lg sm:px-10">
                        <Formik
                            initialValues={formInitialState}
                            onSubmit={handleSubmit}
                            validationSchema={formConstrains}
                        >
                            {(props) => (
                                <form
                                    className="space-y-6"
                                    onSubmit={props.handleSubmit}
                                >
                                    {formFields.map((obj, idx) => {
                                        return (
                                            <InputField
                                                key={idx}
                                                InputField={obj}
                                                classes={formClasses}
                                                {...props}
                                            />
                                        );
                                    })}
                                    <FormMessages ref={formMessageRef} />
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <input
                                                id="remember-me"
                                                name="remember-me"
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                                                disabled
                                            />
                                            <label
                                                htmlFor="remember-me"
                                                className="ml-2 block text-sm text-gray-900"
                                            >
                                                Remember me
                                            </label>
                                        </div>

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
                                            disabled={props.isSubmitting}
                                            className="flex w-full justify-center rounded-md border border-transparent bg-orange-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                                        >
                                            {props.isSubmitting ? (
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
                                            {props.isSubmitting
                                                ? 'processing..'
                                                : 'Submit'}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </Formik>

                        <AuthenticateWithProvider />
                    </div>
                </div>
            </div>
        </>
    );
}
