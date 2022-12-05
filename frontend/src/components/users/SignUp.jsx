import { useSelector, useDispatch } from "react-redux";
import { useReducer, useCallback, useEffect } from "react";
import { usersSignUp } from "../../app/api/ThunkAPI/users/usersSignUp.js";
import { MemoizedComponent } from "../../lib/InputField.jsx";
import { SignUpSchema } from "./model/signUpSchema.js";

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
            return initializeState(SignUpSchema);
        default:
            break;
    }
};
export default function SignUp() {
    const dispatch = useDispatch()
    const userState = useSelector(state => state.users)
    const [state, dispatcher] = useReducer(
        reducer,
        SignUpSchema,
        initializeState
    );

    const handleChange = useCallback((e) => {
        dispatcher({
            type: ACTION.CHANGE_VALUE,
            field: e.target.name,
            payload: e.target.value,
        });
    }, []);

    const handleForm = useCallback(
        async (e) => {
            e.preventDefault();
            dispatch(usersSignUp({ state }))
            debugger
        },
        [state, dispatch]
    );

    useEffect(() => {
        console.log("signUp update - data: ",);
    }, []);
    return (
        <div className="container w-50">
            <form action="/users/signup" onSubmit={handleForm}>
                {SignUpSchema.map((obj, idx) => {
                    return (
                        <MemoizedComponent
                            key={idx}
                            attributes={obj.attributes}
                            label={obj.label}
                            options={obj.options}
                            value={state[obj.attributes.name]}
                            onChange={handleChange}
                        />
                    );
                })}
                <div className="mb-3">
                    <p>{userState.loading ? 'loading...' : ''}</p>
                </div>
                <div className="mb-3">
                    <p>{userState.error}</p>
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
