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
        defaultValue,
    } = props || {};

    return (
        <>
            {label ? (
                <label htmlFor={fieldName} className={labelClasses}>
                    {label}
                </label>
            ) : null}

            <select
                name={fieldName}
                id={fieldName}
                className={fieldClasses}
                defaultValue={defaultValue}
                onChange={handleChange}
                onBlur={handleBlur}
                value={value}
            >
                {options.map((option) => (
                    <option className="capitalize">{option}</option>
                ))}
            </select>
            {props.children}
        </>
    );
};
