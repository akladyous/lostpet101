import { useReducer, useCallback } from 'react'
import { MemoizedComponent } from '../../lib/InputField.jsx';
import { SignUpSchema } from './model/signUpSchema.js';

const initializeState = (obj) => {
    return obj.reduce(
        (acc, value) => {
            acc[value.attributes.name] = '';
            return acc
        },
        {})
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
            return initializeState(SignUpSchema);
        default:
            break;
    }
}

export default function SignUp() {
    const [state, dispatch] = useReducer(reducer, SignUpSchema, initializeState);
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
                SignUpSchema.map((obj, idx) => {
                    return (
                        <MemoizedComponent
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
