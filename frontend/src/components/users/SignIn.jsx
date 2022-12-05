import { useSelector, useDispatch } from "react-redux";
import { useReducer, useCallback, useEffect } from "react";
import { usersSignIn } from "../../app/api/ThunkAPI/users/usersSignIn.js";
import { MemoizedComponent } from "../layout/form/InputField.jsx";
import { SignInSchema } from "./form/SignInSchema.js";

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
    const dispatch = useDispatch()
    const state = useSelector(state => state.users)
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
            dispatch(usersSignIn({ user: formState, controller }))
            controller.abort()
        },
        [formState, dispatch]
    );

    useEffect(() => {
        console.log("signUp update - data: ",);
    }, []);
    return (
        <div className="container w-50">
            <form action="/users/signup" onSubmit={handleForm}>
                {SignInSchema.map((obj, idx) => {
                    return (
                        <MemoizedComponent
                            key={idx}
                            attributes={obj.attributes}
                            label={obj.label}
                            options={obj.options}
                            value={formState[obj.attributes.name]}
                            onChange={handleChange}
                        />
                    );
                })}
                <div className="mb-3">
                    <p>{state?.loading === 'loading' && 'loading...'}</p>
                </div>
                <div className="mb-3">
                    {/* <p>{userState.error}</p> */}
                </div>
                <div className="mb-3">{/* <p>{data}</p> */}</div>
                <div className="mb-3">
                    <button
                        type="submit"
                        className="btn-boxed cs-primary text-white"
                        onClick={null}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
