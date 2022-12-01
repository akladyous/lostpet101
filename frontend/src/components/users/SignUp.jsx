import { useReducer, useEffect } from 'react'
import { MemoizedComponent } from '../../lib/Element.jsx'
const camelCaseToString = str => str.split(/(?=[A-Z])/).join(' ')

function initialState(initialValue) {
    return { ...initialValue }
}

const initialValue = {
    email: '',
    password: '',
    passwordConfirmation: '',
}
const ACTION = {
    CHANGE_VALUE: "changeValue",
    SUBMIT_FORM: "submitForm",
    RESET: 'reset',
}

function reducer(state, action) {
    switch (action.type) {
        case ACTION.CHANGE_VALUE:
            return { ...state, [action.payload.inputName]: action.payload.value }
        case ACTION.SUBMIT_FORM:
            return state
        case ACTION.RESET:
            return initialValue
        default:
            break;
    }
}

export default function SignUp(props) {

    const [state, dispatch] = useReducer(reducer, initialValue, initialState)
    const handleChange = e => {
        dispatch({
            type: ACTION.CHANGE_VALUE,
            payload: { inputName: e.target.name, value: e.target.value }
        })
    };
    useEffect(() => { console.log('signup update') }, [])
    return (
        <div>
            <h1>Form</h1>
            <div className="container w-50">
                <form action="/users/signup">
                    <div className="mb-3">
                        <label htmlFor="email" className='form-label'>Email address</label>
                        <input
                            type="email"
                            name="email"
                            id='email'
                            className='form-control'
                            value={state.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className='form-label'>Password</label>
                        <input
                            type="password"
                            name="password"
                            id='password'
                            className='form-control'
                            value={state.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <MemoizedComponent
                            name='passwordConfirmation'
                            type='password'
                            value={state.passwordConfirmation}
                            label='password confirmation'
                            onChange={handleChange}
                            options={{ placeholder: 'password Confirmation', disabled: false }}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}
