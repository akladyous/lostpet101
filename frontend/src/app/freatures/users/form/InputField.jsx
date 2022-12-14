export function InputField(props) {
    const {
        fieldName,
        fieldType,
        fieldClasses,
        label,
        labelClasses,
        handleChange,
        handleBlur,
        value,
    } = props || {};

    return (
        <div>
            {label ? (
                <label htmlFor={fieldName} className={labelClasses}>
                    {label}
                </label>
            ) : null}

            <input
                name={fieldName}
                type={fieldType}
                id={fieldName}
                className={fieldClasses}
                onChange={handleChange}
                onBlur={handleBlur}
                value={value}
            />
            {props.children}
        </div>
    );
}
