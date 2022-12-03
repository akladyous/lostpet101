import React, { useReducer, useCallback, useRef, useEffect } from "react";
import Item from "../../lib/Item.jsx";
import useAxios from "../../hocs/useAxios.jsx";

const formColumns = [
    {
        attributes: { name: 'email', type: 'email' },
        label: { value: 'Email Address', className: 'form-label' },
        options: {}
    },
    {
        attributes: { name: 'password', type: 'password' },
        label: { value: 'password', className: 'form-label' },
        options: {}
    },
    {
        attributes: { name: 'password_confirmation', type: 'password' },
        label: { value: 'password confirmation', className: 'form-label' },
        options: {}
    },
];
const initializeState = (obj) => {
    return obj.reduce(
        (acc, value) => {
            acc[value.attributes.name] = '';
            return acc
        },
        {})
}

const __initialValue = {
    email: "",
    password: "",
    password_confirmation: "",
};

const ACTION = {
    UPDATE_FIELD: "changeValue",
    SUBMIT_FORM: "submitForm",
    RESET: "reset",
};

function reducer(state, action) {
    switch (action.type) {
        case ACTION.UPDATE_FIELD:
            return { ...state, [action.field]: action.value, };
        case ACTION.SUBMIT_FORM:
            return state;
        case ACTION.RESET:
            return initializeState(formColumns);
        default:
            break;
    }
}

export default function SignUp(props) {
    const [state, dispatch] = useReducer(reducer, formColumns, initializeState);
    const isMounted = useRef(false)

    const { loading, error, data, handler } = useAxios({}, false)

    const handleChange = useCallback((e) => {
        if (!isMounted.current) return
        dispatch({
            field: e.target.name,
            type: ACTION.UPDATE_FIELD,
            value: e.target.value
        });
    }, [])

    const handleForm = useCallback((e) => {
        e.preventDefault();
        handler({ method: 'post', url: 'users/signup', data: state }, true)
        console.log('data: ', data)
    }, [])

    useEffect(() => {
        isMounted.current = true
        console.log('signup updated/mounted : ')

        return () => { console.log('signup unmounted : '); isMounted.current = false }
    }, [])

    return (
        <div>
            <h1>Form</h1>
            <div className="container w-50">
                <form action="/users/signup" onSubmit={handleForm}>
                    {/* {
                        formColumns.map(col => {
                            return (
                                <div className="mb-3" key={window.crypto.randomUUID()}>
                                    <Item
                                        attributes={{
                                            ...col.attributes,
                                            className: 'form-control',
                                            value: state[col.attributes.name]
                                        }}
                                        label={col.label}
                                        option={col.options}
                                        state={state}
                                        handleChange={handleChange}
                                    />
                                </div>
                            )
                        })
                    } */}

                    <div className="mb-3">
                        <Item
                            attributes={{
                                name: "email",
                                type: "email",
                                value: state.email,
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
                        <Item
                            attributes={{
                                name: "password",
                                type: "password",
                                value: state.password,
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
                                minLength: 5,
                                maxLength: 64
                            }}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <Item
                            attributes={{
                                name: "password_confirmation",
                                type: "password",
                                value: state.password_confirmation,
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
                        <button className="btn-boxed cs-primary text-white" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
