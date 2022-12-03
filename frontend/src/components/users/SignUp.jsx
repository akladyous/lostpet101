import { useReducer, } from "react";
import { MemoizedComponent } from "../../lib/Element.jsx";
import useAxios from "../../hocs/useAxios.jsx";

const columns = [
    {
        attributes: { name: 'email', type: 'email', value: '' },
        label: { value: 'Email Address', className: 'form-label' },
        options: {}
    },
    {
        attributes: { name: 'password', type: 'password', value: '' },
        label: { value: 'password', className: 'form-label' },
        options: {}
    },
    {
        attributes: { name: 'password_confirmation', type: 'password', value: '' },
        label: { value: 'password confirmation', className: 'form-label' },
        options: {}
    },
];
const initColumns = (obj) => {
    return obj.reduce(
        (acc, value) => { acc[value.attributes.name] = value.attributes.value; return acc }, {}
    )
}

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
        debugger
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
                    {
                        columns.map(col => (
                            <div className="mb-3">
                                <MemoizedComponent
                                    attributes={{ ...col.attributes, className: 'form-control' }}
                                    label={col.label}
                                    option={col.options}
                                    onChange={handleChange}
                                />
                            </div>
                        ))
                    }
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
