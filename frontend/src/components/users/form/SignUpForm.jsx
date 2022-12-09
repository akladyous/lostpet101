import { signUpSchema } from './form/signUpSchema.js';
import { useCallback } from 'react';
const [formFields, formInitialState, formClasses, formConstrains] =
    signUpSchema();

export default function SignUpForm({
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
}) {
    const onSubmit = useCallback(async () => {}, []);
    return (
        <form onSubmit={handleSubmit}>
            {formFields.map((obj, idx) => {
                return (
                    <div key={idx} className="">
                        <label
                            htmlFor={obj.input.name}
                            className={formClasses.label}
                        >
                            {obj.label.name}
                        </label>
                        <input
                            type={obj.input.type}
                            name={obj.input.name}
                            id={obj.input.name}
                            className={formClasses.textField}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values[obj.input.name]}
                        />
                        {errors[obj.input.name] ? (
                            <p className="pt-2 text-sm text-red-600">
                                {' '}
                                {errors[obj.input.name]}
                            </p>
                        ) : null}
                    </div>
                );
            })}
        </form>
    );
}
