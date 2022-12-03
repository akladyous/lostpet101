import { useReducer, } from "react";
import { MemoizedComponent } from "../../lib/Element.jsx";
import useAxios from "../../hocs/useAxios.jsx";

const initialValue = {
    email: "",
    password: "",
    password_confirmation: "",
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

export default function SignUp(props) {
    const [state, dispatch] = useReducer(reducer, initialValue);

    const { loading, error, data, handler } = useAxios({}, false)

    const handleChange = (e) => {
        dispatch({
            type: ACTION.CHANGE_VALUE,
            payload: { inputName: e.target.name, value: e.target.value },
        });
    };
    function handleForm(e) {
        e.preventDefault();
        handler({ method: 'post', url: 'users/signup', data: state }, true)
        console.log('data: ', data)
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
                                name: "password_confirmation",
                                type: "password",
                                value: state.password_confirmation,
                                id: "password_confirmation",
                                className: "form-control",
                            }}
                            label={{
                                value: "password confirmation",
                                htmlFor: "password_confirmation",
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
                        <p>{error}</p>
                    </div>
                    <div className="mb-3">
                        <p>{loading}</p>
                    </div>
                    <div className="mb-3">
                        {/* <p>{data}</p> */}
                    </div>
                    <div className="mb-3">
                        <button className="btn-boxed cs-primary text-white">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
