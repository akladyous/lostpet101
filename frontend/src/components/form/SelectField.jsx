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
    } = props || {};

    return (
        <div>
            {label ? (
                <div className="flex justify-between">
                    <label htmlFor={fieldName} className={labelClasses}>
                        {label}
                    </label>
                    <span id="phone-optional" className="text-xs text-gray-500">
                        {!props?.required && 'Optional'}
                    </span>
                </div>
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
        </div>
    );
};
