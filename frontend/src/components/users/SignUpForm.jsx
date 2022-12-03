import { useReducer, } from "react";
import { MemoizedComponent } from "../../lib/Element.jsx";

const initialValue = {
    email: "",
    password: "",
    passwordConfirmation: "",
};
const ACTION = {
    CHANGE_VALUE: "changeValue",
    SUBMIT_FORM: "submitForm",
    RESET: "reset",
};

function reducer(state, action) {
    switch (action.type) {
        case ACTION.CHANGE_VALUE:
            return {
                ...state,
                [action.payload.inputName]: action.payload.value,
            };
        case ACTION.SUBMIT_FORM:
            return state;
        case ACTION.RESET:
            return initialValue;
        default:
            return state;
    }
}

export default function SignUpForm(props) {
    const [state, dispatch] = useReducer(reducer, initialValue);
    const handleChange = (e) => {
        dispatch({
            type: ACTION.CHANGE_VALUE,
            payload: { inputName: e.target.name, value: e.target.value },
        });
    };
    function handleForm(e) {
        e.preventDefault();
    }

    return (
        <div>
            <h1>Form</h1>
            <div className="container w-50">
                <form action="/users/signup" onSubmit={handleForm}>
                    <div className="mb-3">
                        <MemoizedComponent
                            attributes={{
                                name: "email",
                                type: "email",
                                value: state.email,
                                id: "email",
                                className: "form-control",
                            }}
                            label={{
                                value: "email Address",
                                htmlFor: "email",
                                className: "form-label",
                            }}
                            options={{ placeholder: "email", disabled: false }}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <MemoizedComponent
                            attributes={{
                                name: "password",
                                type: "password",
                                value: state.password,
                                id: "password",
                                className: "form-control",
                            }}
                            label={{
                                value: "password",
                                htmlFor: "password",
                                className: "form-label",
                            }}
                            options={{
                                placeholder: "password",
                                disabled: false,
                            }}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <MemoizedComponent
                            attributes={{
                                name: "passwordConfirmation",
                                type: "password",
                                value: state.passwordConfirmation,
                                id: "passwordConfirmation",
                                className: "form-control",
                            }}
                            label={{
                                value: "password confirmation",
                                htmlFor: "passwordConfirmation",
                                className: "form-label",
                            }}
                            options={{
                                placeholder: "password Confirmation",
                                disabled: false,
                            }}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <button className="btn-boxed cs-primary text-white">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}