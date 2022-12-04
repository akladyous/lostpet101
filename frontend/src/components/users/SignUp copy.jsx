import React, { useReducer, useCallback, useRef, useEffect, useState } from "react";
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

const initialValue = {
    email: '',
    password: '',
    password_confirmation: ''
}

const ACTION = {
    UPDATE_FIELD: "update_field",
    SUBMIT_FORM: "submitForm",
    RESET: "reset",
};

// function reducer(state, action) {
//     switch (action.type) {
//         case ACTION.UPDATE_FIELD:
//             return { ...state, [action.field]: action.value, };
//         case ACTION.SUBMIT_FORM:
//             return state;
//         case ACTION.RESET:
//             return initializeState(formColumns);
//         default:
//             break;
//     }
// }

export default function SignUp(props) {

    // const { loading, error, data, handler } = useAxios({}, false)

    const reducer = useCallback((state, action) => {
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
    }, [])
    const [state, dispatch] = useReducer(reducer, initialValue);

    const handleChange = useCallback((e) => {
        dispatch({
            type: ACTION.CHANGE_VALUE,
            field: e.target.name,
            payload: e.target.value,
        });
    }, [])

    // const handleForm = useCallback((e) => {
    //     e.preventDefault();
    //     handler({ method: 'post', url: 'users/signup', data: state }, true)
    //     console.log('data: ', data)
    // }, [data, handler, state])

    return (
        <div className="container w-50">
            {
                Object.entries(state).map(item => {
                    let colName = item[0];
                    let col = formColumns.find(item => item.attributes.name === 'email')
                    return (
                        <div className="mb-3" key={window.crypto.randomUUID()}>
                            <Item
                                attributes={{
                                    ...col.attributes,
                                    className: 'form-control',
                                }}
                                label={col.label}
                                option={col.options}
                                value={state[colName]}
                                onChange={handleChange}
                            />
                        </div>
                    )
                })
            }

            {/* <div className="mb-3">
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
                    </div> */}


            {/* <div className="mb-3">
                        <p>{error}</p>
                    </div>
                    <div className="mb-3">
                        <p>{loading}</p>
                    </div> */}
            <div className="mb-3">
            </div>
            <div className="mb-3">
                <button className="btn-boxed cs-primary text-white" type="submit">Submit</button>
            </div>
        </div>
    );
}
