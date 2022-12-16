import Label from './Label.jsx';

export const SelectField = (props) => {
    const {
        fieldName,
        fieldClasses,
        label,
        labelClasses,
        handleChange,
        handleBlur,
        value,
        options,
        container,
        ...others
    } = props || {};

    // debugger;
    return (
        <>
            {label ? (
                <Label htmlFor={fieldName} className={labelClasses} />
            ) : null}

            <div className="mt-1">
                <select
                    name={fieldName}
                    id={fieldName}
                    className={fieldClasses}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={value}
                >
                    <option value=""></option>
                    {options.map((option, idx) => (
                        <option
                            key={idx}
                            className="capitalize"
                            value={option.value}
                        >
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
            {props.children}
        </>
    );
};
