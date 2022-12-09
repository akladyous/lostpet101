import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { usersSignUp } from '../../app/api/ThunkAPI/users/usersSignUp.js';
import { signUpSchema } from './form/signUpSchema.js';
import { useFormik, Formik } from 'formik';
// import AuthenticateWithProvider from "./form/AuthenticateWithProvider.jsx";

const [formFields, formInitialState, formClasses, formConstrains] =
    signUpSchema();

export default function SignUp() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.users);
    const navigate = useNavigate();

    const handleSubmit = useCallback(
        async (values, formikBag) => {
            // const controller = new AbortController();
            const response = await dispatch(usersSignUp({ user: values }));
            // controller.abort();

            debugger;
            if (usersSignUp.fulfilled.match(response)) {
                setTimeout(() => {
                    navigate(-1, { replace: true });
                }, 2000);
            }
            if (
                response?.error?.message === 'Rejected' &&
                !response.payload?.message
            ) {
                formik.setErrors(response.payload);
            }
        },
        [dispatch]
    );

    const formik = useFormik({
        initialValues: formInitialState,
        onSubmit: handleSubmit,
        validationSchema: formConstrains,
    });
    // user1@milano.com
    useEffect(() => {
        console.log('useEffect');
    }, []);
    return (
        <>
            <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <img
                        className="mx-auto h-20 w-auto"
                        src={require('../../assets/images/avatars/user_placeholder.png')}
                        alt="Your Company"
                    />
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Sign up a new account
                    </h2>
                </div>

                <div className="mx-3 mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-slate py-8 px-4 shadow-xl brightness-100 sm:rounded-lg sm:px-10">
                        <form
                            className="space-y-6"
                            onSubmit={formik.handleSubmit}
                        >
                            {formFields.map((obj, idx) => {
                                return (
                                    <div key={idx} className="">
                                        <label
                                            htmlFor={obj.input.name}
                                            className={formClasses.label}
                                        >
                                            {obj.label.name}
                                        </label>
                                        <input
                                            type={obj.input.type}
                                            name={obj.input.name}
                                            id={obj.input.name}
                                            className={formClasses.textField}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={
                                                formik.values[obj.input.name]
                                            }
                                        />
                                        {formik.touched &&
                                        formik.errors[obj.input.name] ? (
                                            <p className="pt-2 text-sm text-red-600">
                                                {' '}
                                                {formik.errors[obj.input.name]}
                                            </p>
                                        ) : null}
                                    </div>
                                );
                            })}
                            {state.error?.message ? (
                                <div className="">
                                    <p className="text-sm text-red-600">
                                        {state.error.message}
                                    </p>
                                </div>
                            ) : null}
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
                                    disabled={formik.isSubmitting}
                                    className="flex w-full justify-center rounded-md border border-transparent bg-orange-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>
                        {/* <AuthenticateWithProvider /> */}
                    </div>
                </div>
            </div>
        </>
    );
}
