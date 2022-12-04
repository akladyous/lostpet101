import { useEffect } from "react";
import { useReducer, useCallback } from "react";
import useAxios from "../../hocs/useAxios.jsx";
import { MemoizedComponent } from "../../lib/InputField.jsx";
import { SignUpSchema } from "./model/signUpSchema.js";
import '../../assets/css/spinner.css'

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
const Spinner = () => {
    return (
        <>
            <svg className="spinner" viewBox="0 0 50 50">
                <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth={"5"}></circle>
            </svg>
        </>
    )
}
export default function SignUp() {
    const [state, dispatch] = useReducer(
        reducer,
        SignUpSchema,
        initializeState
    );
    const [{ loading, error, data }, handler, cancelOutstandingRequest] =
        useAxios(
            { method: "post", url: "users/signup", data: state },
            { manual: true }
        );

    const handleChange = useCallback((e) => {
        dispatch({
            type: ACTION.CHANGE_VALUE,
            field: e.target.name,
            payload: e.target.value,
        });
    }, []);

    const handleForm = useCallback(
        async (e) => {
            e.preventDefault();
            handler({ method: "post", url: "users/signup", data: state, });
            if (error) {
                console.log('error : ', error)
            }
        },
        [data, error, handler, loading, state]
    );

    useEffect(() => {
        console.log("signUp update - data: ", data);
    }, [data, loading, error]);
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
                    <p>{loading ? 'loading...' : ''}</p>
                </div>
                <div className="mb-3">
                    <p>{error}</p>
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
