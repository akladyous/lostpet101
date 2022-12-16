import Label from './Label.jsx';
export function TextField(props) {
    const {
        fieldName,
        fieldType,
        label,
        fieldClasses,
        labelClasses,
        labelInfo,
        handleChange,
        handleBlur,
        value,
        ...others
    } = props || {};

    return (
        <div>
            {label ? (
                <Label htmlFor={fieldName} className={labelClasses} />
            ) : null}
            <input
                name={fieldName}
                type={fieldType}
                id={fieldName}
                className={fieldClasses}
                onChange={handleChange}
                onBlur={handleBlur}
                value={value}
                {...others}
            />
            {props.children}
        </div>
    );
}
