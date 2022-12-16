import Label from './Label.jsx';

export const SelectField = (props) => {
    const {
        name,
        className,
        handleChange,
        handleBlur,
        value,
        options,
        ...others
    } = props || {};

    // debugger;
    return (
        <>
            <div className="mt-1">
                <select
                    name={name}
                    id={name}
                    className={className}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={value}
                    {...others}
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
