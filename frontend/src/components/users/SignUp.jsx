import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { usersSignUp } from '../../app/api/ThunkAPI/users/usersSignUp.js';
import {
    signUpSchema,
    initializeState,
    formClasses,
} from './form/signUpSchema.js';
// import AuthenticateWithProvider from "./form/AuthenticateWithProvider.jsx";
import { Field, Form, Formik, FormikProps, useFormik } from 'formik';
import * as Yup from 'yup';

export default function SignUp() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.users);

    // const handleForm = useCallback(
    //     async (e) => {
    //         e.preventDefault();
    //         const controller = new AbortController();
    //         dispatch(usersSignUp({ user: formState, controller }));
    //         controller.abort();
    //     },
    //     [dispatch]
    // );
    const handleSubmit = useCallback((values, formikBag) => {
        console.log(values);
        console.log(formikBag);
        // const controller = new AbortController();
        // dispatch(usersSignUp({values, controller }));
        // controller.abort();
    }, []);
    const formik = useFormik({
        initialValues: initializeState(signUpSchema),
        onSubmit: handleSubmit,
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            password: Yup.string()
                .min(5, 'Must be 5 and 32 characters')
                .max(64, 'Must be 5 and 32 characters'),
            password_confirmation: Yup.string()
                .min(5, 'Must be 5 and 32 characters')
                .max(64, 'Must be 5 and 32 characters'),
        }),
    });
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
                            {signUpSchema.map((obj, idx) => {
                                return (
                                    <div key={idx} className="">
                                        <label
                                            htmlFor={obj.input.name}
                                            className={formClasses.label}
                                        >
                                            {obj.label.name}
                                        </label>
                                        <input
                                            type={obj.input.name}
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
                                            <p className="text-sm text-red-600">
                                                {' '}
                                                {formik.errors[obj.input.name]}
                                            </p>
                                        ) : null}
                                    </div>
                                );
                            })}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    {/* <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                                    />
                                    <label
                                        htmlFor="remember-me"
                                        className="ml-2 block text-sm text-gray-900"
                                    >
                                        Remember me
                                    </label> */}
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
