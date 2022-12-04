import { useReducer, useCallback } from 'react'
import Item from '../../lib/Item.jsx';

const formColumns = [
    {
        attributes: { name: 'email', type: 'email', className: 'form-control' },
        label: { value: 'Email Address', className: 'form-label' },
        options: {}
    },
    {
        attributes: { name: 'password', type: 'password', className: 'form-control' },
        label: { value: 'password', className: 'form-label' },
        options: {}
    },
    {
        attributes: { name: 'password_confirmation', type: 'password', className: 'form-control' },
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
    CHANGE_VALUE: "changeValue",
    SUBMIT_FORM: "submitForm",
    RESET: "reset",
};
const reducer = (state, action) => {
    switch (action.type) {
        case ACTION.CHANGE_VALUE:
            return { ...state, [action.field]: action.payload };
        case ACTION.RESET:
            return initialValue;
        default:
            break;
    }
}

export default function SignUp() {
    const [state, dispatch] = useReducer(reducer, formColumns, initializeState);
    const handleChange = useCallback(e => {
        dispatch({
            type: ACTION.CHANGE_VALUE,
            field: e.target.name,
            payload: e.target.value
        })
    }, [])

    return (
        <div className='container w-50'>
            {
                formColumns.map((obj, idx) => {
                    return (
                        <Item
                            key={idx}
                            attributes={obj.attributes}
                            label={obj.label}
                            options={obj.options}
                            value={state[obj.attributes.name]}
                            onChange={handleChange}
                        />
                    )
                })
            }
        </div>
    )
}
