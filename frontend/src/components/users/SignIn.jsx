import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useReducer, useCallback } from "react";
import { usersSignUp } from "../../app/api/ThunkAPI/users/usersSignUp.js";
import { MemoizedComponent } from "../layout/form/InputField.jsx";
import { SignInSchema } from './form/SignInSchema.js'
import AuthenticateWithProvider from "./form/AuthenticateWithProvider.jsx";

const initializeState = (obj) => {
    return obj.reduce((acc, value) => {
        acc[value.attributes.name] = "";
        return acc;
    }, {});
};
const ACTION = {
    CHANGE_VALUE: "changeValue",
    SUBMIT_FORM: "submitForm",
    RESET: "reset",
};
const reducer = (state, action) => {
    switch (action.type) {
        case ACTION.CHANGE_VALUE:
            return { ...state, [action.field]: action.payload };
        case ACTION.RESET:
            return initializeState(SignInSchema);
        default:
            break;
    }
};
export default function SignIn() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.users);
    const [formState, formDispatch] = useReducer(
        reducer,
        SignInSchema,
        initializeState
    );

    const handleChange = useCallback((e) => {
        formDispatch({
            type: ACTION.CHANGE_VALUE,
            field: e.target.name,
            payload: e.target.value,
        });
    }, []);

    const handleForm = useCallback(
        async (e) => {
            e.preventDefault();
            const controller = new AbortController();
            dispatch(usersSignUp({ user: formState, controller }));
            controller.abort();
        },
        [formState, dispatch]
    );

    const handleInputsError = useCallback((attributeName) => {
        if (state?.error?.attributeName) {
            return state.error.attributeName
        }
        return ''
    }, [state.error])


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

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md mx-3">
                    <div className="bg-slate brightness-100 py-8 px-4 shadow-xl sm:rounded-lg sm:px-10">
                        <form className="space-y-6" action="#" method="POST" onSubmit={handleForm}>
                            {SignInSchema.map((obj, idx) => {
                                return (
                                    <MemoizedComponent
                                        key={idx}
                                        attributes={obj.attributes}
                                        label={obj.label}
                                        options={obj.options}
                                        value={formState[obj.attributes.name]}
                                        onChange={handleChange}
                                        inputError={handleInputsError}
                                    />
                                );
                            })}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                        Remember me
                                    </label>
                                </div>

                                <div className="text-sm">
                                    <Link
                                        to='/users/sigin'
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
