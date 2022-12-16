export function TextField(props) {
    const { type, name, className, handleChange, handleBlur, value, ...rest } = props || {};

    return (
        <>
            <input
                type={type}
                name={name}
                id={name}
                className={className}
                onChange={handleChange}
                onBlur={handleBlur}
                value={value}
                {...rest}
            />
        </>
    );
}
